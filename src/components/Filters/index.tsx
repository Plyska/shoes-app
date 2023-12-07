import { useState } from "react";
import Box from "@mui/material/Box";
import { filtersData } from "../../constants";
import { styles } from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FilterState } from "../../types";

interface FiltersProps {
  activeTab: FilterState;
  setActiveTab: (tab: FilterState) => void;
}

const Filters = ({ activeTab, setActiveTab }: FiltersProps): JSX.Element => {
  const handleFilterTab = (value: FilterState) => () => {
    setActiveTab(value);
  };

  return (
    <Box component="section" sx={styles.container}>
      <Box sx={styles.filterText}>
        <Typography variant="subtitle1">Sort by:</Typography>
      </Box>
      <Box sx={styles.filtersContainer}>
        {filtersData.map((filter: any) => {
          const { title, Icon, IconActive, value } = filter;
          const isActive = value === activeTab;
          return (
            <Box key={title} sx={styles.filter}>
              <Button
                color={isActive ? "error" : "primary"}
                variant={isActive ? "contained" : "outlined"}
                startIcon={isActive ? <IconActive /> : <Icon />}
                onClick={handleFilterTab(value)}
                size="medium"
              >
                <Typography variant="subtitle1">{title}</Typography>
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Filters;
