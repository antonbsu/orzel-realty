import { defineField } from "sanity";

export const propertyTypes = [
  { title: 'Mieszkanie', value: 'Mieszkanie' },
  { title: 'Kawalerka', value: 'Kawalerka' },
  { title: 'Dom', value: 'Dom' },
  { title: 'Pokoj', value: 'Pokoj' },
  { title: 'Działka', value: 'Działka' },
  { title: 'Garaż', value: 'Garaż' },
  { title: 'Magazyn', value: 'Magazyn' },
  { title: 'Biuro', value: 'Biuro' },
  { title: 'Sklep', value: 'Sklep' },
  { title: 'Budynek', value: 'Budynek' },
  
]

export const propertyPurpose = [
  { title: 'Sprzedaż', value: 'Sprzedaż' },
  { title: 'Wynajem', value: 'Wynajem' },
  { title: 'Dzierżawa', value: 'Dzierżawa' },
  { title: 'Inwestycja', value: 'Inwestycja' },
]

export const propertyType = [
  { title: 'Mieszkalny', value: 'Mieszkalny' },
  { title: 'Komercyjny', value: 'Komercyjny' },

]

const property = {
  name: 'property',
  title: 'Недвижимость',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().max(50).error('Name should be less than 50 characters'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'iframeUrl',
      title: 'Ссылка на 3D-тур',
      type: 'url',
      description: 'URL для встраиваемого IFrame, например, виртуального тура',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().min(3).error('Minimum 3 images'),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'district',
      title: 'District',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(100).error('Minimum 100 characters'),
    }),
    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'string',
      validation: Rule => Rule.required().max(50).error('Developer should be less than 50 characters'),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required().min(100).error('Minimum 100 characters'),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: propertyTypes,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'purpose',
      title: 'Purpose',
      type: 'string',
      options: {
        list: propertyPurpose,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: propertyType,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rooms',
      title: 'Rooms',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'floor',
      title: 'Floor',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'monthlyRent',
      title: 'Monthly Rent',
      type: 'number',
    }),
    defineField({
      name: 'deposit',
      title: 'Deposit',
      type: 'number',
    }),
    defineField({
      name: 'furnished',
      title: 'Furnished',
      type: 'boolean',
    }),
    defineField({
      name: 'balconyOrTerrace',
      title: 'Balkon / Terrace / Garden',
      type: 'string',
      options: {
        list: [
          { title: 'Balkon', value: 'Balkon' },
          { title: 'Taras', value: 'Taras' },
          { title: 'Ogród', value: 'Ogród' },
        ],
      },
    }),
    defineField({
      name: 'parking',
      title: 'Parking',
      type: 'boolean',
    }),
    // defineField({
    //   name: 'isBooked',
    //   title: 'Zarezerwowany',
    //   type: 'boolean',
    //   initialValue: false,
    // }),
  ],
}

export default property;