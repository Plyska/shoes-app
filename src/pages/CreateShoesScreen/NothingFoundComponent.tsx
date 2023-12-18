import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ShoesImage from "../../assets/shoes.png";
import { styles } from "./styles";
import Typography from "@mui/material/Typography";

const NothingFoundComponent = (): JSX.Element => (
  <Stack display="flex" alignItems="center" justifyContent="center" mt="5rem">
    <Box
      component="img"
      src={ShoesImage}
      alt="shoes_img"
      sx={styles.shoesImage}
    />
    <Stack mt="3rem">
      <Typography variant="body2">
        Search better. <br />
        There is nothing like this in your collection.
      </Typography>
    </Stack>
  </Stack>
);

export default NothingFoundComponent;