import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { createClient } from '@sanity/client';

export const prerender = false;

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY || '', {
  // Using a stable recent API version
  apiVersion: '2026-04-22.dahlia', 
});

const sanity = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '05wa67le',
  dataset: import.meta.env.SANITY_DATASET || process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-10-21',
  token: import.meta.env.SANITY_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN,
});

export const POST: APIRoute = async ({ request }) => {
  const signature = request.headers.get('stripe-signature');
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return new Response('Missing signature or webhook secret', { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Check if we already processed this payment to ensure idempotency
    const paymentIntentId = typeof session.payment_intent === 'string' 
      ? session.payment_intent 
      : session.payment_intent?.id;

    if (!paymentIntentId) {
      console.error('No payment_intent found in session');
      return new Response('No payment_intent found in session', { status: 400 });
    }

    try {
      // 1. Check if the order already exists
      const existingOrder = await sanity.fetch(
        `*[_type == "order" && stripePaymentIntentId == $paymentIntentId][0]`,
        { paymentIntentId }
      );

      if (existingOrder) {
        // Idempotency: We already processed this payment
        console.log(`Payment ${paymentIntentId} already processed.`);
        return new Response('Already processed', { status: 200 });
      }

      // We need to extract the product ID (releaseId). 
      // Se recomienda pasar el ID del release como client_reference_id en los Payment Links de Stripe
      // o dentro del metadata.
      const releaseId = session.client_reference_id || session.metadata?.releaseId;

      if (!releaseId) {
        console.error('No releaseId found in session metadata or client_reference_id');
        return new Response('No releaseId found', { status: 400 });
      }

      // 2 & 3. Atomic Transaction: Decrement stock AND create order together
      // Esto asegura que si falla uno, ninguno de los dos se aplique.
      const transaction = sanity.transaction();
      
      transaction.patch(releaseId, (p) => p.dec({ stockCount: 1 }));
      
      transaction.create({
        _type: 'order',
        stripePaymentIntentId: paymentIntentId,
        releaseId: {
          _type: 'reference',
          _ref: releaseId
        },
        status: 'completed'
      });

      await transaction.commit();

      console.log(`Successfully processed order for release ${releaseId}`);
      return new Response('Success', { status: 200 });

    } catch (err: any) {
      console.error('Error processing order in Sanity:', err);
      return new Response('Error processing order', { status: 500 });
    }
  }

  return new Response('Event received', { status: 200 });
};
