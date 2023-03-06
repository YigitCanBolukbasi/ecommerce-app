/* eslint-disable react/no-array-index-key */
import { List, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { nanoid } from "nanoid";
import React from "react";

import nameData from "./nameData";
import MenuItems from "./MenuItems";

const MenuNavbarStyled = styled(List)(({ theme }) => ({
  margin: "0 120px 0 120px",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
  ".css-1oqqzyl-MuiContainer-root": {
    paddingLeft: 0,
    maxWidth: "100%",
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  overflow: "hidden",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

function MenuNavbar() {
  return (
    <MenuNavbarStyled>
      {nameData.map((menu, index) => {
        const depthLevel = 0;
        return (
          <Stack key={nanoid()} direction="row">
            <MenuItems items={menu} key={index} depthLevel={depthLevel} />
          </Stack>
        );
      })}
    </MenuNavbarStyled>
  );
}

export default MenuNavbar;
