import { useState, useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styles } from "./styles";
import SearchHeader from "./SearchHeader";
import CreateImage from "../../assets/create.png";
import MuiDrawer from "../../components/Drawer";
import { addNewShoes } from "../../api/addNewShoes";
import { useWithLoading } from "../../hooks/useWithLoading";
import { getAllShoes as getAllShoesEndpoint } from "../../api/getAllShoes";
import { Shoes } from "../../types";
import { Store } from "../../App";
import { DrawerForm } from "../../types";
import ShoesCard from "../../components/ShoesCard";
import Grid from "@mui/material/Grid";

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
];

const CreateShoesScreen = (): JSX.Element => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const [allShoes, setAllShouse] = useState<Shoes[]>([]);

  const { lastUpdated, shouldReload } = useContext(Store);

  const addWithLoading = useWithLoading(addNewShoes);
  const getAllShoes = useWithLoading(getAllShoesEndpoint);

  const addShoes = async (shoes: DrawerForm) => {
    await addWithLoading(shoes);
    closeDrawer();
    shouldReload();
  };

  const openDrawer = () => {
    setIsDrawer(true);
  };

  const closeDrawer = () => {
    setIsDrawer(false);
  };

  useEffect(() => {
    getAllShoes().then(setAllShouse);
  }, [getAllShoes, lastUpdated]);

  useEffect(() => {
    console.log(allShoes);
  }, [getAllShoes, lastUpdated, allShoes]);

  return (
    <Box component="main" sx={styles.container}>
      <SearchHeader openDrawer={openDrawer} />
      <Stack
        width="100%"
        spacing={{ xs: 1, sm: 2, md: 4, xl: 4, lg: "1.25rem" }}
        display="flex"
        // alignItems="stretch"
        direction={{
          xs: "column",
          sm: "column",
          md: "column",
          xl: "row",
          lg: "row",
        }}
        // display={{
        //   xs: "block",
        //   sm: "block",
        //   md: "block",
        //   xl: "flex",
        //   lg: "flex",
        // }}
        useFlexGap
        flexWrap="wrap"
      >
        {ALL_SHOES.map((shoes, i) => (
          <ShoesCard shoes={shoes} key={shoes._id} />
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
      <Stack mt="5rem" sx={styles.mobileButton}>
        <Button
          startIcon={<PlusIcon />}
          size="large"
          variant="contained"
          onClick={openDrawer}
        >
          Add new sneakers
        </Button>
      </Stack>
      <MuiDrawer
        isDrawer={isDrawer}
        closeDrawer={closeDrawer}
        addShoes={addShoes}
      />
    </Box>
  );
};

export default CreateShoesScreen;
