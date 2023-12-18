import Box from "@mui/material/Box";
import { filtersData } from "../../constants";
import { styles } from "./styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FilterState, FiltersData, QueryParams } from "../../types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as SelectIcon } from "../../assets/icons/chevron_down.svg";
import { useNavigate, createSearchParams } from "react-router-dom";

interface FiltersProps {
  activeTab: FilterState;
  queryParams: QueryParams;
  isFilters?: boolean;
}

const Filters = ({
  activeTab = "year",
  queryParams,
  isFilters,
}: FiltersProps): JSX.Element => {
  const navigate = useNavigate();

  const handleFilterTab = (value: FilterState) => () => {
    navigate({
      pathname: "",
      search: createSearchParams({
        ...queryParams,
        sortBy: value,
      }).toString(),
    });
  };

  return (
    <>
      <Box component="section" sx={styles.container}>
        <Box sx={styles.filterText}>
          <Typography variant="subtitle1">Sort by:</Typography>
        </Box>
        <Box sx={styles.filtersContainer}>
          {filtersData.map((filter: FiltersData) => {
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
      <Box
        sx={{
          display: isFilters ? "block" : "none",
        }}
      >
        <Box component="section" sx={styles.mobileContainer}>
          <Select value={activeTab} size="small" IconComponent={SelectIcon}>
            {filtersData.map((filter: FiltersData) => (
              <MenuItem
                key={filter.title}
                value={filter.value}
                onClick={handleFilterTab(filter.value)}
              >
                Sort by: {filter.title}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </>
  );
};

export default Filters;
