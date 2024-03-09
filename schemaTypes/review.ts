import { defineField } from "sanity";

const review = {
  name: 'review',
  title: 'Отзывы',
  type: 'document',
  fields: [
    {
      name: 'personPhoto',
      title: 'Person Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'personName',
      title: 'Person Name',
      type: 'string',
    },
    {
      name: 'personPosition',
      title: 'Person Position',
      type: 'string',
    },
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
};

export default review;