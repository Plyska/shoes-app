import {
  createBrowserRouter,
  RouteObject,
  useRouteError,
} from "react-router-dom";

import AppLayout from "../layout/AppLayout";
import Typography from "@mui/material/Typography";

import HomeScreen from "../pages/HomeScreen";
import CreateShoesScreen from "../pages/CreateShoesScreen";

const ErrorElement = () => {
  const error = useRouteError();

  console.log("error: ", error);

  return <Typography component="h1">OOOPS...</Typography>;
};

const staticPages: RouteObject = {
  path: "/",
  element: <AppLayout />,
  errorElement: <ErrorElement />,
  children: [
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "create",
      element: <CreateShoesScreen />,
    },
  ],
};

const routes: RouteObject[] = [staticPages];

export default createBrowserRouter(routes);
