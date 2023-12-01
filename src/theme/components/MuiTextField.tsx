import { Components } from "@mui/material";
import { palette } from "../palette";

const MuiTextField: Partial<Components["MuiTextField"]> = {
  styleOverrides: {
    root: {

      "&:hover": {
        // backgroundColor: palette.themeColors.button,
        // color: `${palette.themeColors.black} !important`,
        // border: `1px solid ${palette.themeColors.button}`,

        // "& svg": {
        //   fill: palette.themeColors.button,
        //   stroke: palette.themeColors.button,
        // },
      },
      "&:active": {
        // backgroundColor: palette.themeColors.buttonText,
        // color: `${palette.themeColors.button} !important`,
        // border: `2px solid ${palette.themeColors.button}`,

        // "& svg": {
        //   fill: palette.themeColors.button,
        //   stroke: palette.themeColors.button,
        // },
      },
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
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        // height: 50,
        // width: "100%",
        // border: "0.07rem solid",
        // letterSpacing: "0.15rem",
        // fontSize: "0.75rem",
        // lineHeight: "16px",
        // transition: animation.transition,
        // color: palette.themeColors.button,
        // borderRadius: "18.75rem"
      },
    },
  ],
};

export default MuiTextField;