type Link = {
  _type: 'link';
  href: string;
}

type Image = {
  _type: 'image';
  options: {
    hotspot: boolean;
  };
  // Добавьте здесь другие свойства из вашего image типа, если они присутствуют
}

type Block = {
  _type: 'block';
  style: string;
  children: string[];
  list?: string;
  markDefs?: (Link | {})[]; // Замените {} на более конкретный тип, если есть другие markDefs
}

type BlockContent = {
  _type: 'blockContent';
  _key?: string;
  _rawChildren?: Block[];
}

export type Review = {
  _type: 'review';
  _id?: string;
  personPhoto: {
    _type: 'image';
    asset: {
      _ref: string;
    };
    options: {
      hotspot: boolean;
    };
  };
  personName: string;
  personPosition: string;
  content: BlockContent[];
}