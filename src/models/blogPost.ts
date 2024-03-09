type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { _type: 'slug'; current: string };
  mainImage: Image;
  publishedAt: string;
  excerpt: string;
  body: any;
};