import { PaletteOptions } from "@mui/material";

export const themeColors = {
  focus: "#20A9F3",
  hover: "#373737",
  white: "#FFFFFF",
  gray: "#808080",
  light_gray: "#CCCCCC",
  background: "#EEEFF0",
  black: "#191919",
  red: "#EF233C",
};

export const palette: Partial<PaletteOptions> & {
  themeColors: typeof themeColors;
} = {
  themeColors,
};
