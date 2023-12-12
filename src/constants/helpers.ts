import { FilterState, Shoes } from "../types";
import { filters } from ".";

export const sortShoes = (
  activeTab: FilterState,
  allShoes: Array<Shoes>
): Shoes[] => {
  return allShoes.toSorted((a, b) => a[activeTab] - b[activeTab]);
};

export const filtersData = (x: Shoes[], search: string): Shoes[] =>
  x.filter(
    (shoes) =>
      shoes.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
      shoes.brand.toLowerCase().indexOf(search.toLowerCase()) > -1
  );

export const sortResolver = (key: unknown): FilterState => {
  if (Object.values(filters).indexOf(key as FilterState) > -1)
    return key as FilterState;
  return "year";
};
