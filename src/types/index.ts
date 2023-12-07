export interface DrawerForm {
  name: string;
  brand: string;
  price: number;
  size: number;
  year: number;
  rating: number | null;
}

export interface Shoes extends DrawerForm {
  _id: string;
}

export type FilterState = "year" | "size" | "price";