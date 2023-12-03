"use client";
import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";

const theme = createTheme({
  palette: {
    primary: {
      main: palette.themeColors.black,
    },
    error: {
      main: palette.themeColors.red,
    },
  },
  components: {
    MuiButton,
    MuiTextField,
  },
});

theme.typography.h1 = {
  fontFamily: "Boxing",
  fontWeight: 400,
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
    lineHeight: "2rem",
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
    lineHeight: "2rem",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    lineHeight: "2rem",
    textAlign: "center",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "4rem",
    lineHeight: "4rem",
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
    lineHeight: "4rem",
    textAlign: "left",
  },
};

theme.typography.h2 = {
  fontFamily: "Boxing",
  fontWeight: 400,
  fontSize: "2.25rem"
};

theme.typography.body1 = {
  fontFamily: "Excon-Regular",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.up("xl")]: {
    textAlign: "left",
  },
  [theme.breakpoints.up("lg")]: {
    textAlign: "left",
  },
};

theme.typography.body2 = {
  fontFamily: "Excon-Regular",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  textAlign: "center",
};

// theme.typography. = {
//   fontFamily: "Excon-Regular",
//   fontWeight: 400,
//   fontSize: "1rem",
//   lineHeight: "1.5rem",
//   textAlign: "center",
// };

export default theme;
