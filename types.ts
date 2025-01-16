export type Billboard = {
  id: string;
  label: string;
  image_url: string;
};

export type Category = {
  id: string;
  name: string;
  store_id: string;
  billboard: Billboard;
  products: Product[];
};

export type Size = {
  id: string;
  name: string;
  value: string;
};
export type Color = {
  id: string;
  name: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  is_featured: boolean;
  is_archived: boolean;
  images: {url: string}[];
  category: Category;
};

export type Store = {
  id: string;
  name: string;
  created_at: Date;
  billboards: Billboard[];
  categories: Category[];
  products: Product[];
};
