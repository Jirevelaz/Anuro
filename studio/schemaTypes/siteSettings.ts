import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'marqueeText',
      title: 'Marquee Text (Cinta rotativa)',
      type: 'string',
      description: 'Texto que da vueltas en la página de inicio. Ej: EL ALMA DE LA MÚSICA GIRA EN VINILO',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({name: 'instagram', type: 'url', title: 'Instagram URL'}),
        defineField({name: 'facebook', type: 'url', title: 'Facebook URL'}),
        defineField({name: 'youtube', type: 'url', title: 'YouTube URL'}),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Información de Contacto General',
      type: 'object',
      fields: [
        defineField({name: 'whatsapp', type: 'string', title: 'WhatsApp (Número)'}),
        defineField({name: 'email', type: 'string', title: 'Correo de contacto principal'}),
        defineField({name: 'wholesaleEmail', type: 'string', title: 'Correo de mayoreo'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Ajustes Generales del Sitio',
      }
    },
  },
})
