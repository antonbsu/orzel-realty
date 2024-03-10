import { defineField } from "sanity";

const blogPost = {
  name: 'blogPost',
  title: 'Новости',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название новости',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Ссылка на страницу',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
      description: 'Нажмите для генерации ссылки',
    }),
    defineField({
      name: 'mainImage',
      title: 'Превью новости',
      type: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      validation: Rule => Rule.required(),
      description: 'Дату можно менять',
    }),
    defineField({
      name: 'excerpt',
      title: 'Краткое содержание',
      type: 'text',
      validation: Rule => Rule.required(),
      description: '1-2 предложения',
    }),
    defineField({
      name: 'body',
      title: 'Текст новости',
      type: 'blockContent',
      validation: Rule => Rule.required(),
      description: 'Сюда пишем текст, тут его форматируем',
    }),
  ],
}

export default blogPost;