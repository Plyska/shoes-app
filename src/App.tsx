import { useState, createContext, useCallback } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./constants/routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
import { Alert } from "./types";
import Box from "@mui/material/Box";

export const Store = createContext({} as any);

function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [lastUpdated, setlastUpdated] = useState<number>(0);
  const [alert, setAlert] = useState<Alert>({
    show: false,
    status: "success",
    message: "",
  });

  const shouldReload = useCallback(() => setlastUpdated(Date.now()), []);

  return (
    <Store.Provider
      value={{
        isLoading,
        setLoading,
        lastUpdated,
        shouldReload,
        alert,
        setAlert,
      }}
    >
      <ThemeProvider theme={theme}>
        {isLoading && (
          <Box className="loader">
            <CircularProgress />
          </Box>
        )}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
