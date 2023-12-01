"use client";
import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import { themeColors } from "./palette";

const theme = createTheme({
  palette: {
    primary: {
      main: themeColors.black,
    },
    error: {
      main: themeColors.red
    }
  },
  components: {
    MuiButton,
    MuiTextField
  },
});

export default theme;
