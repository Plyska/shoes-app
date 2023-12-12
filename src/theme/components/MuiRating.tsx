import { Components } from "@mui/material";
import { palette } from "../palette";

const MuiRating: Partial<Components["MuiRating"]> = {
  styleOverrides: {
    root: {
      "&:hover": {
        
      },
      "&:active": {},
      "&:focus": {},
      "&.Mui-disabled": {},
    },
  },
  variants: [
    {
      props: { size: "large" },
      style: {},
    },
    {
      props: { size: "medium" },
      style: {},
    },
    {
      props: { color: "error" },
      style: {},
    },
  ],
};

export default MuiRating;
