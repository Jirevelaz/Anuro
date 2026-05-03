import {defineType, defineField, defineArrayMember} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const home = defineType({
  name: 'homeSettings',
  title: 'Página de Inicio',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'Configuración para Google y Redes sociales',
      type: 'seo',
    }),
    defineField({
      name: 'mainHero',
      title: 'Sección Principal (Frase de arriba)',
      type: 'object',
      description: 'Configura la frase de bienvenida y las estadísticas (números).',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título Principal (Ej: Pon una rana...)'}),
        defineField({name: 'description', type: 'text', title: 'Descripción de bienvenida', rows: 3}),
        defineField({
          name: 'stats',
          title: 'Nuestras Cifras (Estadísticas)',
          type: 'array',
          description: 'Los números que aparecen resaltados (Ej: +10 discos enviados).',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: años curando)'}),
                defineField({name: 'value', type: 'string', title: 'Valor (Ej: +1)'}),
              ]
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'heroLabel',
      title: 'Etiqueta del Disco del Mes (Ej: Disco del Mes · Mayo)',
      type: 'string',
    }),
    defineField({
      name: 'heroArtist',
      title: 'Artista del Mes',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título del Álbum del Mes',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Descripción del Disco del Mes',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroBullets',
      title: 'Puntos clave del disco (Lista)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})]
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Destacada del Disco',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroBadge',
      title: 'Círculo sobre la imagen (Ej: #84 · 2026)',
      type: 'string',
    }),
    defineField({
      name: 'heroLink',
      title: 'Link del botón (Ej: /collections/disco-del-mes)',
      type: 'string',
    }),
    defineField({
      name: 'benefits',
      title: 'Sección de Beneficios (Por qué ANURO)',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título de la sección'}),
        defineField({
          name: 'cards',
          title: 'Tarjetas de beneficios',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string', title: 'Título corto'}),
                defineField({name: 'description', type: 'text', title: 'Descripción breve', rows: 2}),
                defineField({name: 'icon', type: 'string', title: 'Código del Icono (SVG)', description: 'Solo para expertos. Si no sabes, déjalo igual.'})
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'distributionTeaser',
      title: 'Invitación a Distribución (Final de página)',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título llamativo'}),
        defineField({name: 'description', type: 'text', title: 'Descripción breve'}),
        defineField({name: 'image', type: 'image', title: 'Imagen de fondo', options: {hotspot: true}}),
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Contenido de la Página de Inicio',
      }
    },
  },
})
