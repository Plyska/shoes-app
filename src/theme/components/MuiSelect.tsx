import { Components } from "@mui/material";

const MuiSelect: Partial<Components["MuiSelect"]> = {
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
