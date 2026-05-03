import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO y Redes Sociales',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Título para Google',
      type: 'string',
      description: 'Este es el título azul que sale en los resultados de búsqueda. Trata de que sea corto y directo.',
      validation: Rule => Rule.max(60).warning('Si es más largo de 60 caracteres, Google podría cortarlo.')
    }),
    defineField({
      name: 'metaDescription',
      title: 'Descripción para Google',
      type: 'text',
      rows: 3,
      description: 'Es el texto gris que sale debajo del título en Google. Resume de qué trata esta página.',
      validation: Rule => Rule.max(160).warning('Si es más largo de 160 caracteres, Google lo cortará.')
    }),
    defineField({
      name: 'shareImage',
      title: 'Imagen para compartir (WhatsApp / Facebook)',
      type: 'image',
      description: 'Esta es la imagen que aparece automáticamente cuando pegas el link en un chat o en redes sociales.',
      options: {
        hotspot: true,
      },
    }),
  ],
})
