import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styles } from "./styles";
import SearchHeader from "./SearchHeader";
import CreateImage from "../../assets/create.png";
import MuiDrawer from "./Drawer";

const CreateShoesScreen = (): JSX.Element => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);

  const openDrawer = () => {
    setIsDrawer(true);
  };

  const closeDrawer = () => {
    setIsDrawer(false);
  };

  return (
    <Box component="main" sx={styles.container}>
      <SearchHeader openDrawer={openDrawer} />
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
      <MuiDrawer isDrawer={isDrawer} closeDrawer={closeDrawer} />
    </Box>
  );
};

export default CreateShoesScreen;
