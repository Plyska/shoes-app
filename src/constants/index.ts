import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as SizeIcon } from "../assets/icons/size.svg";
import { ReactComponent as DollarIcon } from "../assets/icons/dollar.svg";
import { ReactComponent as DollarIconActive } from "../assets/icons/dollar_active.svg";
import { ReactComponent as SizeIconActive } from "../assets/icons/size_active.svg";
import { ReactComponent as CalendarIconActive } from "../assets/icons/calendar_active.svg";
import { FiltersData } from "../types";

export const KEY = process.env.REACT_APP_KEY;

export const filtersData: FiltersData[] = [
  {
    title: "Oldest Year",
    value: "year",
    Icon: CalendarIcon,
    IconActive: CalendarIconActive,
  },
  {
    title: "Smallest Size",
    Icon: SizeIcon,
    value: "size",
    IconActive: SizeIconActive,
  },
  {
    title: "Lowest Price",
    Icon: DollarIcon,
    value: "price",
    IconActive: DollarIconActive,
  },
];
