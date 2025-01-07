export type Billboard = {
    id: number;
    label: string;
    image_url: string
}

export type Category = {
    id: number;
    name: string;
    billboard: Billboard;
}

export type Size = {}
export type Color = {}
export type Product = {}

export type Store = {
    store_id: number;
    store_name: string;
    store_created_at: Date;
    billboards: Billboard[];
    categories: Category[];
    products: Product[]
}