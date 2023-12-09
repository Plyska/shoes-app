import { styles } from "./styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Shoes } from "../../types";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import Rating from "@mui/material/Rating";

interface ShoesCardProps {
  shoes: Shoes;
  deleteShoes: (shoesId: string) => Promise<void>
}

const ShoesCard = ({ shoes, deleteShoes }: ShoesCardProps): JSX.Element => {

  const handleDelete = () => {
    deleteShoes(shoes._id)
  }
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.titleNButtonContainer}>
        <Box>
          <Typography variant="h3">{shoes.brand}</Typography>
        </Box>
        <Box onClick={handleDelete}>
          <TrashIcon />
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="subtitle1" textAlign="left">
            {shoes.name}
          </Typography>
        </Box>
        <Box sx={styles.ratingContainer}>
          <Rating value={shoes.rating} readOnly/>
        </Box>
      </Box>
      <Box sx={styles.bottomContentContainer}>
        <Box>
          <Typography variant="subtitle2">{shoes.year}</Typography>
          <Typography>Year</Typography>
        </Box>
        <Box sx={styles.dividerContainer}>
          <Typography variant="subtitle2">{shoes.size}</Typography>
          <Typography>Size US</Typography>
        </Box>
        <Box sx={styles.dividerContainer}>
          <Typography variant="subtitle2">${shoes.price}</Typography>
          <Typography>Price</Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default ShoesCard;
