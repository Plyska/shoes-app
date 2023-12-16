import { useState, useContext, useEffect, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styles } from "./styles";
import SearchHeader from "./SearchHeader";
import MuiDrawer from "../../components/Drawer";
import { addNewShoes } from "../../api/addNewShoes";
import { useWithLoading } from "../../hooks/useWithLoading";
import { getAllShoes as getAllShoesEndpoint } from "../../api/getAllShoes";
import { Shoes } from "../../types";
import { Store } from "../../App";
import { DrawerForm } from "../../types";
import ShoesCard from "../../components/ShoesCard";
import Filters from "../../components/Filters";
import { FilterState, QueryParams } from "../../types";
import { ResponsiveStyleValue } from "@mui/system";
import { deleteShoes as deleteShoesEndpoint } from "../../api/deleteShoes";
import { editShoes as editShoesEndpoint } from "../../api/editShoes";
import { useNavigate } from "react-router-dom";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { sortResolver, sortShoes, filtersData } from "../../constants/helpers";
import Typography from "@mui/material/Typography";
import CreateImage from "../../assets/create.png";
import ShoesImage from "../../assets/shoes.png";
import NothingFoundComponent from "./NothingFoundComponent";

type DirectionType = ResponsiveStyleValue<
  "row" | "row-reverse" | "column" | "column-reverse"
>;

const ALL_SHOES = [
  {
    _id: "1",
    name: "Nike",
    brand: "Air Jordan",
    price: 200,
    year: 1998,
    size: 9.5,
    rating: 5,
  },
  {
    _id: "2",
    name: "Nike",
    brand: "Air Force",
    price: 150,
    year: 1899,
    size: 9,
    rating: 3,
  },
  {
    _id: "3",
    name: "Nike",
    brand: "Dunk",
    price: 120,
    year: 2001,
    size: 9.5,
    rating: 1,
  },
  {
    _id: "4",
    name: "Addidas",
    brand: "Oznova",
    price: 150,
    year: 2019,
    size: 10,
    rating: 4,
  },
  {
    _id: "5",
    name: "Puma",
    brand: "Nitro",
    price: 90,
    year: 2020,
    size: 8.5,
    rating: 2,
  },
  {
    _id: "6",
    name: "Addidas",
    brand: "Oznova",
    price: 150,
    year: 2019,
    size: 10,
    rating: 4,
  },
  {
    _id: "7",
    name: "Puma",
    brand: "Nitro",
    price: 90,
    year: 2020,
    size: 8.5,
    rating: 2,
  },
];

const CreateShoesScreen = (): JSX.Element => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [allShoes, setAllShouse] = useState<Array<Shoes>>([]);
  const [selectedShoes, setSelectedShoes] = useState<Shoes | {}>({});
  const { lastUpdated, shouldReload, setAlert } = useContext(Store);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo<QueryParams>(
    () => Object.fromEntries([...(searchParams as any)]),
    [searchParams]
  );

  const activeTab = (searchParams.get("sortBy") as FilterState) || "year";
  const search = searchParams.get("search") || "";

  const navigate = useNavigate();

  const isFilters = useMemo(
    () => !!filtersData(sortShoes(activeTab, allShoes), search).length,
    [activeTab, allShoes, search]
  );

  const addWithLoading = useWithLoading(addNewShoes);
  const getAllShoes = useWithLoading(getAllShoesEndpoint);
  const deleteWithLoading = useWithLoading(deleteShoesEndpoint);
  const editWithLoading = useWithLoading(editShoesEndpoint);

  const addShoes = async (shoes: DrawerForm) => {
    await addWithLoading(shoes);
    closeDrawer();
    shouldReload();
  };

  const deleteShoes = async (shoesId: string) => {
    // await deleteWithLoading(shoesId);
    shouldReload();
  };

  const editShoes = async (shoesId: string, shoes: DrawerForm) => {
    await editWithLoading(shoesId, shoes);
    shouldReload();
  };

  const handleSubmitEndpoint = async (
    shoes: DrawerForm,
    id: string = ""
  ): Promise<void> => {
    const isEdit = !!Object.keys(selectedShoes).length;
    console.log(isEdit, selectedShoes);
    if (isEdit) {
      await editShoes(id, shoes);
    } else {
      await addShoes(shoes);
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  const openDrawer = (shoes: Shoes | {}) => {
    setSelectedShoes(shoes);
    setIsDrawer(true);
  };

  const closeDrawer = () => {
    setIsDrawer(false);
  };

  useEffect(() => {
    getAllShoes().then((res) => setAllShouse(res || [])).catch(e => console.log("ERROR"));

    console.log(allShoes);
  }, [getAllShoes, lastUpdated]);

  return (
    <Box component="main" sx={styles.container}>
      <SearchHeader
        activeTab={activeTab}
        openDrawer={openDrawer}
        search={search}
        queryParams={queryParams}
        isFilters={isFilters}
      />
      {!!allShoes.length && isFilters && (
        <Box sx={styles.filtersContainer}>
          <Filters activeTab={activeTab} queryParams={queryParams} />
        </Box>
      )}
      {!!allShoes.length &&
        (isFilters ? (
          <Stack
            width="100%"
            spacing={styles.cardContainer.spacing}
            display="flex"
            direction={styles.cardContainer.direction as DirectionType}
            mt="1rem"
            useFlexGap
            flexWrap="wrap"
          >
            {filtersData(sortShoes(activeTab, allShoes), search).map(
              (shoes) => (
                <ShoesCard
                  shoes={shoes}
                  key={shoes._id}
                  deleteShoes={deleteShoes}
                  openDrawer={openDrawer}
                />
              )
            )}
          </Stack>
        ) : (
          <NothingFoundComponent />
        ))}
      {!allShoes.length && (
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="5rem"
        >
          <Box
            component="img"
            src={CreateImage}
            alt="create_img"
            sx={styles.createImage}
          />
          <Stack mt="3rem">
            <Typography variant="body2">
              Seem’s like you still didn’t add <br /> any new sneaker to your
              collection
            </Typography>
          </Stack>
        </Stack>
      )}
      <Box sx={styles.mobileButtonContainer}>
        <Button
          startIcon={<PlusIcon />}
          size="medium"
          variant="contained"
          onClick={() => openDrawer({})}
          sx={styles.mobileButton}
        >
          Add new sneakers
        </Button>
      </Box>
      {isDrawer && (
        <MuiDrawer
          selectedShoes={selectedShoes as Shoes}
          isDrawer={isDrawer}
          closeDrawer={closeDrawer}
          handleSubmitEndpoint={handleSubmitEndpoint}
          //addShoes={addShoes}
        />
      )}
    </Box>
  );
};

export default CreateShoesScreen;
