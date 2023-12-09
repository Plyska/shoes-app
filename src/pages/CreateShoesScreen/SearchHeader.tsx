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
import { FilterState } from "../../types";

interface SearchHeaderProps {
  openDrawer: () => void;
  activeTab: FilterState;
  setActiveTab: (tab: FilterState) => void;
}

const SearchHeader = ({
  openDrawer,
  activeTab,
  setActiveTab,
}: SearchHeaderProps): JSX.Element => {
  return (
    <Box component="section" sx={styles.header}>
      <Box>
        <Typography variant="h1">Your collection</Typography>
      </Box>
      <Box sx={styles.filtersMobileContainer}>
        <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
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
            onClick={openDrawer}
          >
            Add new sneakers
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchHeader;
