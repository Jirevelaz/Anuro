import {defineType, defineField, defineArrayMember} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const home = defineType({
  name: 'home',
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
      title: 'Información del Disco del Mes (Arriba)',
      type: 'object',
      description: 'Configura el disco que aparece destacado al principio de la página.',
      fields: [
        defineField({name: 'title', type: 'string', title: 'Título Principal (Ej: Pon una rana...)'}),
        defineField({name: 'heroLabel', type: 'string', title: 'Etiqueta superior (Ej: Disco del Mes)'}),
        defineField({name: 'heroArtist', type: 'string', title: 'Artista (Ej: Robber Robber)'}),
        defineField({name: 'heroTitle', type: 'string', title: 'Título del álbum'}),
        defineField({name: 'heroDescription', type: 'text', title: 'Breve descripción del disco', rows: 3}),
        defineField({
          name: 'heroBullets',
          title: 'Puntos clave del disco',
          type: 'array',
          description: 'Añade pequeñas frases descriptivas (Ej: Edición de 500 copias)',
          of: [defineArrayMember({type: 'string', title: 'Punto destacado'})]
        }),
      ]
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Destacada del Disco',
      type: 'image',
      description: 'Sube la portada o una foto artística del disco.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroBadge',
      title: 'Pequeño círculo sobre la imagen',
      type: 'string',
      description: 'Ejemplo: #84 · 2026',
    }),
    defineField({
      name: 'heroLink',
      title: '¿A dónde lleva el botón?',
      type: 'string',
      description: 'Escribe /releases/nombre-del-disco o un link externo.',
    }),
    defineField({
      name: 'description',
      title: 'Descripción de ANURO (Debajo del disco)',
      type: 'text',
      description: 'Es el texto largo que explica qué es Anuro. Aparece justo después de la portada.',
      rows: 4,
    }),
    defineField({
      name: 'stats',
      title: 'Nuestras Cifras (Estadísticas)',
      type: 'array',
      description: 'Los números que aparecen resaltados (Ej: +10 discos enviados).',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', title: 'Etiqueta (Ej: Discos enviados)'}),
            defineField({name: 'value', type: 'string', title: 'Valor (Ej: +10)'}),
          ]
        })
      ]
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
