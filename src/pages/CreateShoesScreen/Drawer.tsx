import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { DrawerForm } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { drawerFormValidator } from "../../validations/DrawerFormValidator";

interface MuiDrawerProps {
  isDrawer: boolean;
  closeDrawer: () => void;
}

const MuiDrawer = ({ isDrawer, closeDrawer }: MuiDrawerProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<DrawerForm>({
    resolver: yupResolver(drawerFormValidator),
  });

  const onSubmit: SubmitHandler<DrawerForm> = async (shoes) => {
    console.log(shoes);
  }

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
                  <Rating {...props} name="simple-controlled" />
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
