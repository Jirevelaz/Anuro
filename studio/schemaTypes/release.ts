import {defineType, defineField} from 'sanity'
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
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          {title: 'CD', value: 'CD'},
          {title: 'Cassette', value: 'Cassette'},
          {title: 'Digital', value: 'Digital'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
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
      name: 'stockCount',
      title: 'Stock Count',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.min(0),
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
