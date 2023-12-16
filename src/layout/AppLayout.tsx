import { Outlet } from "react-router-dom";
import AppAlert from "../components/AppAlert";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Outlet />
      <AppAlert />
    </>
  );
};

export default AppLayout;
