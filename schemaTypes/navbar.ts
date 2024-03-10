// schema.js
export default {
  name: 'navbar',
  title: 'Хедер',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Лагацып',
      type: 'image',
    },
    {
      name: 'menuItems',
      title: 'Пункты меню',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Название пункта меню',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Ссылка на пункт меню',
              type: 'string',
            },
            {
              name: 'subMenu',
              title: 'Пункты подменю',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'subLabel',
                      title: 'Название пункта подменю',
                      type: 'string',
                    },
                    {
                      name: 'subLink',
                      title: 'Ссылка на пункт подменю',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
