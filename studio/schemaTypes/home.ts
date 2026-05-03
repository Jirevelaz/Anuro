import {defineType, defineField, defineArrayMember} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const home = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  icon: HomeIcon,
  fields: [
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración del Inicio (Hero)',
      }
    },
  },
})
