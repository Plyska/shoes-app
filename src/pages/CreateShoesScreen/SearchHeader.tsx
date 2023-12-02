import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { styles } from "./styles";

const SearchHeader = (): JSX.Element => {
  return (
    <Box component="section" sx={styles.header}>
      <Box>
        <Typography variant="h1">Your collection</Typography>
      </Box>
      <Stack display="flex" direction="row">
        <Box component="form">
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
          <Button startIcon={<PlusIcon />} size="large" variant="contained">
            Add new sneakers
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchHeader;
