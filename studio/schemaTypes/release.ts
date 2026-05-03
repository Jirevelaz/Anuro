import {defineType, defineField, defineArrayMember} from 'sanity'
import {PackageIcon} from '@sanity/icons'

export const release = defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
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
      name: 'artist',
      title: 'Artist',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Describe el disco: historia, edición, detalles del prensaje, etc.',
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          {title: 'Vinilo', value: 'Vinilo'},
          {title: 'CD', value: 'CD'},
          {title: 'Cassette', value: 'Cassette'},
          {title: 'Digital', value: 'Digital'},
        ],
        layout: 'radio',
      },
      initialValue: 'Vinilo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
      options: {
        list: [
          {title: 'Disco del Mes', value: 'disco-del-mes'},
          {title: 'Ediciones Especiales', value: 'ediciones-especiales'},
          {title: 'Preventas', value: 'preventas'},
          {title: 'Accesorios', value: 'accesorios'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (MXN)',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          options: {
            list: [
              {title: 'Agotado', value: 'AGOTADO'},
              {title: 'Preventa', value: 'PREVENTA'},
              {title: '1 por persona', value: '1 POR PERSONA'},
              {title: 'Nuevo', value: 'NUEVO'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'buyUrl',
      title: 'Buy URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'stripePaymentUrl',
      title: 'Stripe Payment URL',
      type: 'url',
      description: 'Enlace de pago generado en el Dashboard de Stripe (Payment Link)',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'stockCount',
      title: 'Stock Count',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.min(0).integer(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'artist',
      media: 'coverImage',
    },
  },
})
