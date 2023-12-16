import { useContext, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { Store } from "../../App";
import Typography from "@mui/material/Typography";

const AppAlert = (): JSX.Element => {
  const { alert, setAlert } = useContext(Store);

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        setAlert({
          show: false,
        });
      }, 2000);
    }
  }, [alert.show, setAlert]);

  return (
    alert.show && (
      <Box sx={styles.container}>
        <Alert variant="filled" severity={alert.status} sx={styles.alert}>
          <Typography variant="body2" fontSize="1rem">
            {alert.message}
          </Typography>
        </Alert>
      </Box>
    )
  );
};

export default AppAlert;
