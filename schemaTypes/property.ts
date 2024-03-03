import { defineField } from "sanity";

const propertyTypes = [
  { title: 'Flat', value: 'flat'},
  { title: 'House', value: 'house' },
  { title: 'Room', value: 'room' },
  { title: 'Office', value: 'office' },
]

const propertyPurpose = [
  { title: 'Rent', value: 'rent'},
  { title: 'Sale', value: 'sale' },
]

const propertyType = [
  { title: 'Living', value: 'living' },
  { title: 'Commercial', value: 'commercial' },
]

const property = {
  name: 'property',
  title: 'Property',
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
    // defineField({
    //   name: 'discount',
    //   title: 'Discount',
    //   type: 'number',
    //   initialValue: 0,
    //   validation: Rule => Rule.min(0),
    // }),
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
      title: 'Balcony / Terrace / Garden',
      type: 'string',
      options: {
        list: [
          { title: 'Balcony', value: 'balcony' },
          { title: 'Terrace', value: 'terrace' },
          { title: 'Garden', value: 'garden' },
        ],
      },
    }),
    defineField({
      name: 'garden',
      title: 'Garden',
      type: 'boolean',
    }),
    defineField({
      name: 'parking',
      title: 'Parking',
      type: 'boolean',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isBooked',
      title: 'Is Booked',
      type: 'boolean',
      initialValue: false,
    }),
  ],
}

export default property;