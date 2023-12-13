import { useState, ChangeEvent, useMemo, useEffect } from "react";
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
import { FilterState, Shoes, QueryParams } from "../../types";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";

interface SearchHeaderProps {
  openDrawer: (shoes: Shoes | {}) => void;
  activeTab: FilterState;
  search?: string | null;
  queryParams: QueryParams;
}

const SearchHeader = ({
  openDrawer,
  activeTab,
  search,
  queryParams,
}: SearchHeaderProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>(search || "");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleClick = () => {
    openDrawer({});
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    navigate({
      pathname: "",
      search: createSearchParams({
        ...queryParams,
        search: searchText,
      }).toString(),
    });
  };

  useEffect(() => {
    if (!searchText) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchParams, searchText, setSearchParams]);

  return (
    <Box component="section" sx={styles.header}>
      <Box>
        <Typography variant="h1">Your collection</Typography>
      </Box>
      <Box sx={styles.filtersMobileContainer}>
        <Filters activeTab={activeTab} queryParams={queryParams} />
      </Box>
      <Stack display="flex" direction="row" justifyContent="flex-end">
        <Box
          onSubmit={handleSubmit}
          component="form"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            size="small"
            sx={styles.input}
            onChange={handleChange}
            value={searchText}
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
