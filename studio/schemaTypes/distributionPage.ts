import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const distributionPage = defineType({
  name: 'distributionPage',
  title: 'Página de Distribución (Mayoreo)',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'Configuración para Google y Redes sociales',
      type: 'seo',
    }),
    defineField({
      name: 'hero',
      title: 'Sección de Portada (Arriba)',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', title: 'Etiqueta superior (Ej: B2B · Curaduría)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal'}),
        defineField({name: 'description', type: 'text', title: 'Texto descriptivo debajo del título', rows: 3}),
      ]
    }),
    defineField({
      name: 'features',
      title: 'Nuestros Valores / Lo que ofrecemos',
      type: 'array',
      description: 'Aparece debajo de la portada. Son los puntos clave del servicio.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'number', type: 'string', title: 'Número o Icono (Ej: 01 o ★)'}),
            defineField({name: 'title', type: 'string', title: 'Título corto'}),
            defineField({name: 'description', type: 'text', title: 'Descripción breve', rows: 2}),
          ]
        })
      ]
    }),
    defineField({
      name: 'testimonial',
      title: 'Cita o Testimonio',
      type: 'object',
      description: 'Una frase de un cliente o del equipo.',
      fields: [
        defineField({name: 'quote', type: 'text', title: 'La frase (Cita)', rows: 3}),
        defineField({name: 'author', type: 'string', title: 'Nombre del autor'}),
      ]
    }),
    defineField({
      name: 'requirements',
      title: 'Sección de Requisitos (Cómo trabajamos)',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título de la sección (Ej: Requisitos y condiciones)'}),
        defineField({
          name: 'list',
          title: 'Lista de puntos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'boldText', type: 'string', title: 'Texto resaltado (Ej: Compra mínima:)'}),
                defineField({name: 'description', type: 'text', title: 'Descripción del punto'}),
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'useCases',
      title: 'Galería de ejemplos (Casos de uso)',
      type: 'array',
      description: 'Fotos y textos al final de la página que muestran el servicio en acción.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Título'}),
            defineField({name: 'description', type: 'text', title: 'Descripción'}),
            defineField({name: 'image', type: 'image', title: 'Imagen de ejemplo', options: {hotspot: true}}),
          ]
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Contenido de la Página de Distribución',
      }
    },
  },
})
