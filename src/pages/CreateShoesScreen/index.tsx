import { useState, useContext, useEffect } from "react";
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
import { FilterState } from "../../types";
import { ResponsiveStyleValue } from "@mui/system";
import { deleteShoes as deleteShoesEndpoint } from "../../api/deleteShoes";
import { editShoes as editShoesEndpoint } from "../../api/editShoes";

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
  const [allShoes, setAllShouse] = useState<Array<Shoes>>(ALL_SHOES);
  const [activeTab, setActiveTab] = useState<FilterState>("year");
  const [selectedShoes, setSelectedShoes] = useState<Shoes | {}>({});
  const { lastUpdated, shouldReload } = useContext(Store);

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

  const openDrawer = (shoes: Shoes | {}) => {
    setSelectedShoes(shoes);
    setIsDrawer(true);
  };

  const closeDrawer = () => {
    setIsDrawer(false);
  };

  const sortShoes = () => {
    switch (activeTab) {
      case "year":
        setAllShouse(allShoes.toSorted((a, b) => a.year - b.year));
        return;
      case "size":
        setAllShouse(allShoes.toSorted((a, b) => a.size - b.size));
        return;
      case "price":
        setAllShouse(allShoes.toSorted((a, b) => a.price - b.price));
        return;
      default:
        setAllShouse(allShoes);
    }
  };

  // useEffect(() => {
  //   getAllShoes().then(setAllShouse);
  // }, [getAllShoes, lastUpdated]);

  useEffect(() => {
    sortShoes();
  }, [activeTab]);

  return (
    <Box component="main" sx={styles.container}>
      <SearchHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDrawer={openDrawer}
      />
      <Box sx={styles.filtersContainer}>
        <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>
      <Stack
        width="100%"
        spacing={styles.cardContainer.spacing}
        display="flex"
        // justifyContent="space-between"
        direction={styles.cardContainer.direction as DirectionType}
        mt="1rem"
        useFlexGap
        flexWrap="wrap"
      >
        {allShoes.map((shoes, i) => (
          <ShoesCard
            shoes={shoes}
            key={shoes._id}
            deleteShoes={deleteShoes}
            openDrawer={openDrawer}
          />
        ))}
      </Stack>

      {/* <Stack
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
      </Stack> */}
      <Box sx={styles.mobileButtonContainer}>
        <Button
          startIcon={<PlusIcon />}
          size="large"
          variant="contained"
          onClick={openDrawer}
        >
          Add new sneakers
        </Button>
      </Box>
      <MuiDrawer
        selectedShoes={selectedShoes}
        isDrawer={isDrawer}
        closeDrawer={closeDrawer}
        addShoes={addShoes}
      />
    </Box>
  );
};

export default CreateShoesScreen;
