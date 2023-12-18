import { Components } from "@mui/material";
import { palette } from "../palette";

const MuiTextField: Partial<Components["MuiTextField"]> = {
  styleOverrides: {
    root: {
      "&:focus": {
        border: `0.125rem solid ${palette.themeColors.focus}`,
      },
      "&.Mui-disabled": {
        color: `${palette.themeColors.gray} !important`,
        border: "none",
        backgroundColor: palette.themeColors.light_gray,

        "& svg": {
          fill: palette.themeColors.light_gray,
          stroke: palette.themeColors.gray,
        },
      },
    },
  },
};

export default MuiTextField;
