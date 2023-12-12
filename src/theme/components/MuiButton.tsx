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
      // border: `0.1rem solid`,
      // "& svg": {
      //   transition: animation.transition,
      //   fill: palette.themeColors.buttonText,
      //   stroke: palette.themeColors.buttonText,
      //   width: 16,
      // },
      "&:hover": {
        // border: `0.1rem solid`,
        
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
        fontSize: ""
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
    {
      props: { variant: "outlined" },
      style: {
        // height: 50,
        // width: "100%",
        // border: "0.1rem solid",
        // letterSpacing: "0.15rem",
        // fontSize: "0.75rem",
        // lineHeight: "16px",
        // transition: animation.transition,
        // color: palette.themeColors.button,
        // borderRadius: "18.75rem"
      },
    },
    {
      props: { variant: "contained" },
      style: {
        // height: 29,
        // minWidth: 29,
        // backgroundColor: palette.themeColors.button,
        // border: `2px solid ${palette.themeColors.website}`,
        // fontSize: 16,
        // lineHeight: "16px",
        // fontWeight: 700,
        // transition: animation.transition,
        // color: palette.themeColors.website,
        // padding: 0,
      },
    },
  ],
};

export default MuiButton;
