import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import heroImg from "../../assets/hero.png";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

const HomeScreen = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick: () => void = () => {
    navigate("create");
  };

  return (
    <Box component="main" sx={styles.container}>
      <Box sx={styles.imgContainer}>
        <Box component="img" alt="children" src={heroImg} sx={styles.heroImg} />
      </Box>
      <Box component="section" sx={styles.heroTextContainer}>
        <Typography variant="h1">
          Welcome
          <br /> to a sneaker collector
        </Typography>
        <Typography variant="body1" sx={styles.subText}>
          This tool not only lets you showcase your prized sneaker collection
          but also provides you with the tools to curate, organize, and
          catalogue your sneakers like never before.
        </Typography>
        <Box sx={styles.buttonContainer}>
          <Button
            variant="contained"
            size="large"
            sx={styles.heroButton}
            onClick={handleClick}
            fullWidth
          >
            Start your collection
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
