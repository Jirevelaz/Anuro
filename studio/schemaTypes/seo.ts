import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Título',
      type: 'string',
      description: 'Título que aparece en Google (recomendado < 60 caracteres)',
      validation: Rule => Rule.max(60).warning('Demasiado largo para Google')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción',
      type: 'text',
      rows: 3,
      description: 'Resumen que aparece en Google (recomendado < 160 caracteres)',
      validation: Rule => Rule.max(160).warning('Demasiado largo para Google')
    }),
    defineField({
      name: 'shareImage',
      title: 'Imagen para compartir (Open Graph)',
      type: 'image',
      description: 'Imagen que se ve al pegar el link en WhatsApp, Facebook, etc. (1200x630px recomendado)',
      options: {
        hotspot: true,
      },
    }),
  ],
})
