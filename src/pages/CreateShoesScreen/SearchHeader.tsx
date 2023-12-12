import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { styles } from "./styles";
import Filters from "../../components/Filters";
import { FilterState, Shoes } from "../../types";

interface SearchHeaderProps {
  openDrawer: (shoes: Shoes | {}) => void;
  activeTab: FilterState;
  search?: string | null;
}

const SearchHeader = ({
  openDrawer,
  activeTab,
  search,
}: SearchHeaderProps): JSX.Element => {
  const handleClick = () => {
    openDrawer({});
  };

  return (
    <Box component="section" sx={styles.header}>
      <Box>
        <Typography variant="h1">Your collection</Typography>
      </Box>
      <Box sx={styles.filtersMobileContainer}>
        <Filters activeTab={activeTab} />
      </Box>
      <Stack display="flex" direction="row" justifyContent="flex-end">
        <Box
          component="form"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            size="small"
            sx={styles.input}
            defaultValue={search}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={styles.buttonContainer}>
          <Button
            startIcon={<PlusIcon />}
            size="large"
            variant="contained"
            onClick={handleClick}
          >
            Add new sneakers
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchHeader;
