import { useState, useContext, useEffect, useMemo } from "react";
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
import { useSearchParams } from "react-router-dom";
import { sortShoes, filtersData } from "../../constants/helpers";
import Typography from "@mui/material/Typography";
import CreateImage from "../../assets/create.png";
import NothingFoundComponent from "./NothingFoundComponent";

type DirectionType = ResponsiveStyleValue<
  "row" | "row-reverse" | "column" | "column-reverse"
>;

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
    await deleteWithLoading(shoesId).then(() => {
      setAlert({
        show: true,
        message: "Success!",
        status: "success",
      });
    });
    shouldReload();
  };

  const editShoes = async (shoes: DrawerForm, shoesId: string) => {
     await editWithLoading(shoes, shoesId);
    shouldReload();
    closeDrawer();
  };

  const handleSubmitEndpoint = async (
    shoes: DrawerForm,
    id: string = ""
  ): Promise<void> => {
    const isEdit = !!Object.keys(selectedShoes).length;
    if (isEdit) {
      await editShoes(shoes, id);
    } else {
      await addShoes(shoes).then(() => {
        setAlert({
          show: true,
          message: "Success!",
          status: "success",
        });
      });
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
    getAllShoes()
      .then((res) => setAllShouse(res || [])) 
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
        />
      )}
    </Box>
  );
};

export default CreateShoesScreen;
