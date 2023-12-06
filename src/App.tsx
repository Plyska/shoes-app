import { useState, createContext, useCallback } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./constants/routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";

export const Store = createContext({} as any);

const styles: any = {
  position: "fixed",
  height: "100vh",
  width: "100%",
  left: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.3)",
  fontSize: "64px",
  fontWeight: 900,
  color: "#FFF",
  zIndex: 999999,
};

function App() {
  const [isLoading, setLoading] = useState(false);
  const [lastUpdated, setlastUpdated] = useState(0);

  const shouldReload = useCallback(() => setlastUpdated(Date.now()), []);

  return (
    <Store.Provider
      value={{ isLoading, setLoading, lastUpdated, shouldReload }}
    >
      <ThemeProvider theme={theme}>
        {isLoading && <div style={styles}>Loading...</div>}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
