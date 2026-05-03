import {defineType, defineField} from 'sanity'
import {ClipboardIcon} from '@sanity/icons'

export const order = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  icon: ClipboardIcon,
  fields: [
    defineField({
      name: 'stripePaymentIntentId',
      title: 'Stripe Payment Intent ID',
      type: 'string',
      description: 'El ID único del pago en Stripe para evitar cobrar/descontar dos veces.',
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'releaseId',
      title: 'Release',
      type: 'reference',
      to: [{type: 'release'}],
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'Refunded', value: 'refunded'},
        ],
      },
      initialValue: 'completed',
    }),
  ],
  preview: {
    select: {
      title: 'stripePaymentIntentId',
      subtitle: 'status',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Orden sin ID',
        subtitle: subtitle ? `Status: ${subtitle}` : 'Unknown status',
      }
    },
  },
})
