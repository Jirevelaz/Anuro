import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentTextIcon, ImageIcon, PlayIcon, ComponentIcon, ImagesIcon} from '@sanity/icons'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo / Bajada',
      type: 'string',
      description: 'Línea descriptiva bajo el título (ej: "Por qué el MTV Unplugged cambió la música latina")',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Nombre',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Foto',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'bio',
          title: 'Bio corta',
          type: 'text',
          rows: 2,
          description: 'Una o dos líneas sobre el autor',
        }),
      ],
    }),
    defineField({
      name: 'estimatedReadingTime',
      title: 'Tiempo de Lectura (min)',
      type: 'number',
      description: 'Minutos estimados de lectura',
      validation: (rule) => rule.min(1).max(60),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'tag'}]})],
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({
          type: 'image',
          name: 'image',
          title: 'Imagen Simple',
          icon: ImageIcon,
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        }),
        defineArrayMember({
          name: 'youtube',
          type: 'object',
          title: 'Video de YouTube',
          icon: PlayIcon,
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL del video',
            }),
          ],
        }),
        defineArrayMember({
          name: 'releaseReference',
          type: 'object',
          title: 'Lanzamiento / Disco',
          icon: ComponentIcon,
          fields: [
            defineField({
              name: 'release',
              type: 'reference',
              to: [{type: 'release'}],
              title: 'Selecciona el disco',
            }),
          ],
          preview: {
            select: {
              title: 'release.title',
              subtitle: 'release.artist',
              media: 'release.coverImage',
            },
          },
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'object',
          title: 'Galería de Imágenes',
          icon: ImagesIcon,
          fields: [
            defineField({
              name: 'images',
              type: 'array',
              title: 'Imágenes',
              of: [
                defineArrayMember({
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Texto Alternativo',
                    }),
                  ]
                }),
              ],
              options: {layout: 'grid'},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'isFeatured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'author.name',
      date: 'publishedAt',
    },
    prepare({title, media, subtitle, date}) {
      const dateStr = date
        ? new Date(date).toLocaleDateString('es-MX', {day: 'numeric', month: 'short', year: 'numeric'})
        : ''
      return {
        title,
        media,
        subtitle: [subtitle, dateStr].filter(Boolean).join(' · '),
      }
    },
  },
})
