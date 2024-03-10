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
  { title: 'Inwestycja', value: 'Inwestycja' },
]

export const propertyType = [
  { title: 'Mieszkalny', value: 'Mieszkalny' },
  { title: 'Komercyjny', value: 'Komercyjny' },
]

export const market = [
  { title: 'Pierwotny', value: 'Pierwotny' },
  { title: 'Wtórny', value: 'Wtórny' },
]

export const buildingMaterial = [
  { title: 'Panelowy', value: 'Panelowy' },
  { title: 'Cegła', value: 'Cegła' },
  { title: 'Monolit', value: 'Monolit' },
  { title: 'Drewno', value: 'Drewno' },
]

export const buildingOwnership = [
  { title: 'Własność', value: 'Własność' },
  { title: 'Spółdzielcze', value: 'Spółdzielcze' },
  { title: 'Mieszkaniowe', value: 'Mieszkaniowe' },
  { title: 'Najem', value: 'Najem' },
]

export const finishCondition = [
  { title: 'Do remontu', value: 'Do remontu' },
  { title: 'Do zamieszkania', value: 'Do zamieszkania' },
  { title: 'Stan deweloperski', value: 'Stan deweloperski' },
]

export const heating = [
  { title: 'Gazowe', value: 'Gazowe' },
  { title: 'Elektryczne', value: 'Elektryczne' },
  { title: 'Miejskie', value: 'Miejskie' },
  { title: 'Węglowe', value: 'Węglowe' },
  { title: 'Kotłownia', value: 'Kotłownia' },
  { title: 'Klimatyzacja', value: 'Klimatyzacja' },
  { title: 'Inne', value: 'Inne' },
]

export const security = [
  { title: 'Ochrona', value: 'Ochrona' },
  { title: 'Monitoring', value: 'Monitoring' },
  { title: 'Brak', value: 'Brak' },
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
      title: 'Количество комнат',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'floor',
      title: 'Этаж',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'monthlyRent',
      title: 'Чынш',
      type: 'number',
    }),
    defineField({
      name: 'deposit',
      title: 'Депозит',
      type: 'number',
    }),
    defineField({
      name: 'furnished',
      title: 'Мебель есть/нет',
      type: 'boolean',
    }),
    defineField({
      name: 'furnitureList',
      title: 'Список мебели',
      type: 'string',
      hidden: ({ document }) => !document?.furnished, // Показывать поле только если `furnished` равно true
    }),
    defineField({
      name: 'balconyOrTerrace',
      title: 'Балкон / Терраса / Огруд',
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
      title: 'Парковка есть/нет',
      type: 'boolean',
    }),
    defineField({
      name: 'marketType',
      title: 'Рынок',
      type: 'string',
      options: {
        list: market,
      },
    }),
    defineField({
      name: 'buildingMaterial',
      title: 'Материал здания',
      type: 'string',
      options: {
        list: buildingMaterial,
      },
    }),
    defineField({
      name: 'buildingYear',
      title: 'Год постройки',
      type: 'number',
    }),
    defineField({
      name: 'buildingElevator',
      title: 'Лифт есть/нет',
      type: 'string',
    }),
    defineField({
      name: 'buildingOwnership',
      title: 'Форма собственности',
      type: 'string',
      options: {
        list: buildingOwnership,
      },
    }),
    defineField({
      name: 'finishCondition',
      title: 'Состояние отделки',
      type: 'string',
      options: {
        list: finishCondition,
      },
    }),
    defineField({
      name: 'heating',
      title: 'Отопление',
      type: 'string',
      options: {
        list: heating,
      },
    }),
    defineField({
      name: 'mediaPayment',
      title: 'Коммуналка (media)',
      type: 'number',
    }),
    defineField({
      name: 'security',
      title: 'Безопасность',
      type: 'string',
      options: {
        list: security,
      },
    }),
    defineField({
      name: 'additionalInfo',
      title: 'Дополнительная информация',
      type: 'string',
      description: 'Любая дополнительная информация о недвижимости',
    }),
    defineField({
      name: 'isActual',
      title: 'Актуальность',
      type: 'boolean',
      initialValue: true,
      description: 'Выключить, если объект больше не актуален',
    }),
  ],
}

export default property;