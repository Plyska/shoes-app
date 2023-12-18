import { Components } from "@mui/material";
import { palette } from "../palette";

const MuiRating: Partial<Components["MuiRating"]> = {
  styleOverrides: {
    root: {
      "& svg": {
        fill: palette.themeColors.black,
        stroke: palette.themeColors.black,
      },
    },
  },
};

export default MuiRating;
