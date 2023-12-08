import { Components } from "@mui/material";
import { palette } from "../palette";

const MuiSelect: Partial<Components["MuiSelect"]> = {
  styleOverrides: {
    root: {
      // "& svg": {
      //   transition: animation.transition,
      //   fill: palette.themeColors.buttonText,
      //   stroke: palette.themeColors.buttonText,
      //   width: 16,
      // },
      "&:hover": {
        // border: `0.1rem solid`,
        // backgroundColor: palette.themeColors.button,
        // color: `${palette.themeColors.black} !important`,
        // border: `1px solid ${palette.themeColors.button}`,
        // "& svg": {
        //   fill: palette.themeColors.button,
        //   stroke: palette.themeColors.button,
        // },
      },
    },
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        px: "0.75rem",
        py: "0.375rem", 
        borderRadius: "0.75rem", 
        lineHeight: "1.5rem",
        fontSize: "1rem"      
      },
    },
  ],
};

export default MuiSelect;
