import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración Global',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'marqueeText',
      title: 'Texto del anuncio que se mueve (Cintilla)',
      type: 'string',
      description: 'Es la frase que recorre la pantalla de lado a lado. Ejemplo: "EL ALMA DE LA MÚSICA GIRA EN VINILO"',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Enlaces a Redes Sociales',
      type: 'object',
      description: 'Pega aquí los enlaces completos a tus perfiles oficiales',
      fields: [
        defineField({name: 'instagram', type: 'url', title: 'Instagram (URL)'}),
        defineField({name: 'facebook', type: 'url', title: 'Facebook (URL)'}),
        defineField({name: 'youtube', type: 'url', title: 'YouTube (URL)'}),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Datos de Contacto',
      type: 'object',
      fields: [
        defineField({
          name: 'whatsapp', 
          type: 'string', 
          title: 'Número de WhatsApp',
          description: 'Ejemplo: +52 871 1856718'
        }),
        defineField({
          name: 'email', 
          type: 'string', 
          title: 'Email Principal',
          description: 'Correo para consultas generales'
        }),
        defineField({
          name: 'wholesaleEmail', 
          type: 'string', 
          title: 'Email para Mayoreo',
          description: 'Este correo aparecerá en la sección de Distribución'
        }),
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
