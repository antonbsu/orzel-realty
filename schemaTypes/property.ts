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
      title: 'Название объекта',
      type: 'string',
      validation: Rule => Rule.required().max(50).error('Name should be less than 50 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Ссылка на страницу',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
      description: 'Нажмите для генерации ссылки',
    }),
    defineField({
      name: 'pageTitle',
      title: 'Заголовок страницы',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Мета-описание',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'number',
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
      title: 'Изображения хаты',
      type: 'array',
      of: [{ type: 'image' }],
      validation: Rule => Rule.required().min(3).error('Minimum 3 images'),
    }),
    defineField({
      name: 'address',
      title: 'Улица, дом, квартира',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Город',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'district',
      title: 'Район',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'developer',
      title: 'Застройщик',
      type: 'string',
      validation: Rule => Rule.required().max(50).error('Developer should be less than 50 characters'),
      description: 'Если нет застройщика, то пишем Orzel Realty',
    }),
    defineField({
      name: "body",
      title: "Подробное описание",
      type: "blockContent",
    }),
    defineField({
      name: 'shortDescription',
      title: 'Краткое описание',
      type: 'text',
      description: 'Улица, дом, квартира, количество комнат, цена за квадрат',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Контактный телефон агента',
    }),
    defineField({
      name: 'type',
      title: 'Тип недвижимости',
      type: 'string',
      options: {
        list: propertyTypes,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'purpose',
      title: 'Аренда/Продажа/Инвестиция',
      type: 'string',
      options: {
        list: propertyPurpose,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'propertyType',
      title: 'Вариант недвижимости',
      type: 'string',
      options: {
        list: propertyType,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Координаты',
      type: 'geopoint',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'area',
      title: 'Площадь',
      type: 'number',
      validation: Rule => Rule.required(),
      description: 'Впишите только цифры',
    }),
    defineField({
      name: 'rooms',
      title: 'Количество комнат',
      type: 'number',
      validation: Rule => Rule.required(),
      description: 'Впишите только цифры',
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
      description: 'Впишите только цифры',
    }),
    defineField({
      name: 'deposit',
      title: 'Депозит',
      type: 'number',
      description: 'Впишите только цифры',
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
      description: 'Первичка/Вторичка',
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