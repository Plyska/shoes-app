import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { drawerFormValidator } from "../../validations/DrawerFormValidator";
import { DrawerForm, Shoes } from "../../types";

interface MuiDrawerProps {
  isDrawer: boolean;
  closeDrawer: () => void;
  addShoes?: (shoes: DrawerForm) => void;
  selectedShoes: Shoes;
  handleSubmitEndpoint: (shoes: DrawerForm, id?: string) => Promise<void>
}

const MuiDrawer = ({
  isDrawer,
  closeDrawer,
  addShoes,
  selectedShoes,
  handleSubmitEndpoint
}: MuiDrawerProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<DrawerForm>({
    defaultValues: {...selectedShoes},
    resolver: yupResolver(drawerFormValidator),
  });

  const onSubmit: SubmitHandler<DrawerForm> = async (shoes) => {
    reset();
    closeDrawer();
    handleSubmitEndpoint(shoes, selectedShoes._id);
  };

  return (
    <Drawer
      PaperProps={{
        sx: styles.drawer,
      }}
      anchor="right"
      open={isDrawer}
      onClose={closeDrawer}
    >
      <Box component="section" sx={styles.drawerContentContainer}>
        <Box sx={styles.drawerHeader}>
          <Typography variant="h2">
            Add sneakers <br /> to your collection
          </Typography>
          <Box sx={styles.drawerCloseIcon} onClick={closeDrawer}>
            <CloseSvg />
          </Box>
        </Box>
        <Box sx={styles.drawerFormContainer}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.drawerInputContainer}>
              <TextField
                {...register("name")}
                label="Name"
                fullWidth
                size="small"
                error={!!errors.name}
                helperText={!!errors?.name && errors.name.message}
              />
            </Box>
            <Box sx={styles.drawerInputContainer}>
              <TextField
                {...register("brand")}
                label="Brand"
                fullWidth
                size="small"
                error={!!errors.brand}
                helperText={!!errors?.brand && errors.brand.message}
              />
            </Box>
            <Box sx={styles.drawerInputContainer}>
              <TextField
                {...register("price")}
                label="Price"
                fullWidth
                size="small"
                error={!!errors.price}
                helperText={!!errors?.price && errors.price.message}
              />
            </Box>
            <Box sx={styles.drawerInputContainer}>
              <TextField
                {...register("size")}
                label="Size US"
                fullWidth
                size="small"
                error={!!errors.size}
                helperText={!!errors?.size && errors.size.message}
              />
            </Box>
            <Box sx={styles.drawerInputContainer}>
              <TextField
                {...register("year")}
                label="Year"
                fullWidth
                size="small"
                error={!!errors.year}
                helperText={!!errors?.year && errors.year.message}
              />
            </Box>
            <Box sx={styles.drawerInputContainer}>
              <Typography sx={styles.drawerLabel} textAlign="left">
                Rate
              </Typography>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                name="rating"
                render={({ field: props }) => (
                  <Rating
                    {...props}
                    value={Number(props.value)}
                    name="simple-controlled"
                  />
                )}
              />
            </Box>

            <Stack mt="2.5rem">
              <Button
                type="submit"
                startIcon={<PlusIcon />}
                size="large"
                variant="contained"
              >
                Add new sneakers
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MuiDrawer;
