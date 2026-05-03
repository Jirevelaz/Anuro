import {defineType, defineField, defineArrayMember} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const home = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO & Redes Sociales',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'mainHero',
      title: 'Hero Principal (Arriba)',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título principal', description: 'Ej: Pon una rana en tu tornamesa.'}),
        defineField({name: 'description', type: 'text', title: 'Descripción'}),
        defineField({
          name: 'stats',
          title: 'Estadísticas',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'value', type: 'string', title: 'Valor (Ej: +8)'}),
                defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: años curando)'}),
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'heroLabel',
      title: 'Hero Label (Subtítulo)',
      type: 'string',
      description: 'Ejemplo: Disco del Mes · Mayo',
    }),
    defineField({
      name: 'heroArtist',
      title: 'Hero Artist (Artista)',
      type: 'string',
      description: 'Ejemplo: Robber Robber',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Título del disco)',
      type: 'string',
      description: 'Ejemplo: Two Wheels Move The Soul',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description (Descripción corta)',
      type: 'text',
    }),
    defineField({
      name: 'heroBullets',
      title: 'Hero Bullets (Puntos destacados)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Ejemplo: Edición de 500 copias numeradas',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Imagen principal)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge (Etiqueta sobre la imagen)',
      type: 'string',
      description: 'Ejemplo: #84 · 2026',
    }),
    defineField({
      name: 'heroLink',
      title: 'Hero Link (Enlace del botón principal)',
      type: 'string',
      description: 'Ejemplo: /collections/disco-del-mes o /releases/slug-del-disco',
    }),
    defineField({
      name: 'benefits',
      title: 'Beneficios (Por qué ANURO)',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título principal', description: 'Ej: Más que vinilos, una experiencia'}),
        defineField({
          name: 'cards',
          title: 'Tarjetas de Beneficios',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', type: 'string', title: 'Título'}),
                defineField({name: 'description', type: 'text', title: 'Descripción'}),
                defineField({name: 'icon', type: 'string', title: 'SVG Path (Dejar el default si no sabes cambiarlo)'})
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'distributionTeaser',
      title: 'Banner de Distribución (Abajo)',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título principal'}),
        defineField({name: 'description', type: 'text', title: 'Descripción'}),
        defineField({name: 'image', type: 'image', title: 'Imagen de fondo', options: {hotspot: true}}),
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración de Inicio (Home)',
      }
    },
  },
})
