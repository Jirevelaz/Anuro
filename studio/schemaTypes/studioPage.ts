import {defineType, defineField, defineArrayMember} from 'sanity'
import {ControlsIcon} from '@sanity/icons'

export const studioPage = defineType({
  name: 'studioPage',
  title: 'Página de Estudio',
  type: 'document',
  icon: ControlsIcon,
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
        defineField({name: 'label', type: 'string', title: 'Etiqueta superior (Ej: Estudio de Producción)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal (Ej: Tu disco,)'}),
        defineField({name: 'titleHighlight', type: 'string', title: 'Palabra resaltada en verde (Ej: tarifa plana)'}),
        defineField({name: 'description', type: 'text', title: 'Texto descriptivo largo', rows: 3}),
      ]
    }),
    defineField({
      name: 'process',
      title: 'Sección "Así trabajamos"',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: Así trabajamos)'}),
        defineField({name: 'title', type: 'string', title: 'Título de la sección'}),
        defineField({
          name: 'steps',
          title: 'Pasos del proceso',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string', title: 'Nombre del paso'}),
                defineField({name: 'description', type: 'text', title: 'Descripción del paso', rows: 3}),
                defineField({name: 'icon', type: 'string', title: 'Código del Icono (SVG)', description: 'Opcional. Dejar vacío para el icono por defecto.'}),
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'cta',
      title: 'Sección de Contacto Final',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: ¿Listo para empezar?)'}),
        defineField({name: 'title', type: 'string', title: 'Título principal'}),
        defineField({name: 'description', type: 'text', title: 'Texto de invitación'}),
        defineField({name: 'buttonText', type: 'string', title: 'Texto del botón'}),
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Contenido de la Página de Estudio',
      }
    },
  },
})
