import {defineType, defineField, defineArrayMember} from 'sanity'
import {ControlsIcon} from '@sanity/icons'

export const studioPage = defineType({
  name: 'studioPage',
  title: 'Studio Page',
  type: 'document',
  icon: ControlsIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO & Redes Sociales',
      type: 'seo',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: Estudio de Producción)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal (Ej: Tu disco,)'}),
        defineField({name: 'titleHighlight', type: 'string', title: 'Palabra destacada (Ej: tarifa plana)'}),
        defineField({name: 'description', type: 'text', title: 'Descripción'}),
      ]
    }),
    defineField({
      name: 'process',
      title: 'Sección "Así trabajamos"',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: Así trabajamos)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal'}),
        defineField({name: 'titleHighlight', type: 'string', title: 'Palabra subrayada (Ej: simple)'}),
        defineField({
          name: 'steps',
          title: 'Pasos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'stepNumber', type: 'string', title: 'Número (Ej: 01)'}),
                defineField({name: 'title', type: 'string', title: 'Título'}),
                defineField({name: 'description', type: 'text', title: 'Descripción'}),
                defineField({name: 'icon', type: 'string', title: 'SVG Path'})
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'cta',
      title: 'Call To Action (Final de página)',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: ¿Listo para empezar?)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal'}),
        defineField({name: 'description', type: 'text', title: 'Descripción'}),
        defineField({name: 'buttonText', type: 'string', title: 'Texto del botón'}),
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Página de Estudio',
      }
    },
  },
})
