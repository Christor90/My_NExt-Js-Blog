import { title } from 'process';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog acticle',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog acticle',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    defineField({
      name: 'createdAt',
      title: 'Published at',
      type: 'datetime',
    }),
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [{ type: 'text', name: 'alt', title: 'Alt' }],
        },
      ],
    },
  ],
});
