import { Components } from "@mui/material";
import { palette } from "../palette";

const MuiButton: Partial<Components["MuiButton"]> = {
  styleOverrides: {
    root: {
      borderRadius: "0.75rem",
      textTransform: "none",
      boxShadow: "none !important",
      boxSizing: "border-box",
      fontWeight: 400,
      lineHeight: "1rem",
      fontSize: "0.875rem",
      "&:focus": {
        borderColor: palette.themeColors.focus,
      },
      "&.Mui-disabled": {
        color: `${palette.themeColors.gray} !important`,
        border: "none",
        backgroundColor: palette.themeColors.light_gray,

        "& svg": {
          fill: palette.themeColors.white,
          stroke: palette.themeColors.white,
        },
      },
    },
  },
  variants: [
    {
      props: { size: "large" },
      style: {
        padding: "0.65rem 2rem",
      },
    },
    {
      props: { size: "medium" },
      style: {
        fontSize: "",
      },
    },
    {
      props: { color: "error" },
      style: {
        borderColor: palette.themeColors.red,
        "&:svg": {
          fill: palette.themeColors.white,
          stroke: palette.themeColors.white,
        },
      },
    },
  ],
};

export default MuiButton;
