// schema.js
export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'subMenu',
              title: 'Sub Menu',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'subLabel',
                      title: 'Sub Label',
                      type: 'string',
                    },
                    {
                      name: 'subLink',
                      title: 'Sub Link',
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
