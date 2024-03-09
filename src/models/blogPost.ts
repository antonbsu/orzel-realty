type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

export type Seo = {
  _type: 'seo';
  title: string;
  description: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  seo: Seo;
  mainImage: Image;
  publishedAt: string;
  excerpt: string;
  body: any;
};