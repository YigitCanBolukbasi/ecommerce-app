import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Dropdown from "./Dropdown";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../assets/svg/Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "4px",
    borderColor: theme.palette.common.black,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: "25px",
      [theme.breakpoints.up("md")]: {
        width: "40ch",
        height: "25px",
      },
    },
  }));

  const LogoBox = styled(Box)(({ theme }) => ({
    margin: "0 100px 0 100px",
  }));

  const SearchBox = styled(Box)(({ theme }) => ({
    border: "1px solid #89919A",
    borderRadius: "4px",
  }));

  const ButtonSecondSearch = styled(Button)(({ theme }) => ({
    height: "40px",
    marginLeft: "12px",
    width: "110px",
  }));

  return (
    <AppBar color="common" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
          >
            <LogoBox>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={Logo} alt="CQLogo" height="25" width="170" />
              </Typography>
            </LogoBox>
            <SearchBox>
              <Stack direction="row" alignItems="center">
                <Search>
                  <Stack direction="row">
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                    <Dropdown />
                  </Stack>
                </Search>
              </Stack>
            </SearchBox>
            <Box>
              <ButtonSecondSearch variant="contained">
                <SearchIcon />
              </ButtonSecondSearch>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
