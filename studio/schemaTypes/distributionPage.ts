import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const distributionPage = defineType({
  name: 'distributionPage',
  title: 'Distribution Page',
  type: 'document',
  icon: DocumentIcon,
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
        defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: B2B · Curaduría)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal'}),
        defineField({name: 'description', type: 'text', title: 'Descripción'}),
      ]
    }),
    defineField({
      name: 'features',
      title: 'Características Principales',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'number', type: 'string', title: 'Número (Ej: 01)'}),
            defineField({name: 'title', type: 'string', title: 'Título'}),
            defineField({name: 'description', type: 'text', title: 'Descripción'}),
          ]
        })
      ]
    }),
    defineField({
      name: 'testimonial',
      title: 'Cita / Testimonio',
      type: 'object',
      fields: [
        defineField({name: 'quote', type: 'text', title: 'Cita (En ANURO nos mantenemos...)'}),
        defineField({name: 'author', type: 'string', title: 'Autor (Ej: — Equipo ANURO)'}),
      ]
    }),
    defineField({
      name: 'requirements',
      title: 'Requisitos y Condiciones',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título'}),
        defineField({
          name: 'list',
          title: 'Lista de requisitos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'boldText', type: 'string', title: 'Texto en negrita (Ej: Apertura de cuenta:)'}),
                defineField({name: 'description', type: 'text', title: 'Descripción del requisito'}),
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'useCases',
      title: 'Casos de Uso (Final de página)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Título'}),
            defineField({name: 'description', type: 'text', title: 'Descripción'}),
            defineField({name: 'image', type: 'image', title: 'Imagen', options: {hotspot: true}}),
          ]
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Página de Distribución',
      }
    },
  },
})
