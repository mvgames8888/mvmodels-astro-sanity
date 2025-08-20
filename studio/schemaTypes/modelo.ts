import {defineType, defineField} from 'sanity'

// Schema definition for a "Modelo" document. This schema describes a model
// with a name, a URL‑friendly slug, an optional introductory blurb, and
// fields for nationality and place of residence. It also defines a photo
// field using Sanity's built‑in image type with hotspot support.

export default defineType({
  name: 'modelo',
  title: 'Modelo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (value) =>
          value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // remove diacritics
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, ''),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
    }),
    defineField({
      name: 'nationality',
      title: 'Nacionalidad',
      type: 'string',
    }),
    defineField({
      name: 'resides',
      title: 'Reside en',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})