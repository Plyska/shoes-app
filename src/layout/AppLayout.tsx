import { Outlet } from "react-router-dom";

const AppLayout = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AppLayout;
