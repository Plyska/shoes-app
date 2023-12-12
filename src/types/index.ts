import { filters } from "../constants";

export interface Shoes {
  _id: string;
  name: string;
  brand: string;
  price: number;
  size: number;
  year: number;
  rating: number | null;
}

export type ValueOf<T> = T[keyof T];

export type DrawerForm = Omit<Shoes, "_id">

export type FilterState = ValueOf<typeof filters>

export interface FiltersData {
  title: string;
  value: FilterState;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  IconActive: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}