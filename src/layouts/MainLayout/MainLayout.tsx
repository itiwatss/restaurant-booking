import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

import { Stack } from "@mui/material";

const MainLayout = (): JSX.Element => {
  return (
    <Stack direction={"column"}>
      <Menu />
      <Outlet />
    </Stack>
  );
};

export default MainLayout;
