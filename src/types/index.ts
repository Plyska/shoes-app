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

export interface FiltersData {
  title: string;
  value: FilterState;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  IconActive: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}