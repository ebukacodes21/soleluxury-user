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