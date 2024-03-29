import React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dropdown from "./Dropdown";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Logo from "../../assets/svg/Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import { searchProduct } from "../../Redux/products/productsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "4px",
    borderColor: theme.palette.common.black,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {},
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      width: "auto",
    },
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

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    padding: "15px 0 15px 0",
  }));

  const ButtonSecondSearch = styled(Button)(({ theme }) => ({
    height: "40px",
    marginLeft: "12px",
    width: "110px",
  }));

  const handleSearch = (e) => {
    dispatch(searchProduct(e));
  };

  return (
    <StyledAppBar color="common" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction={{
              xs: "column",
              sm: "row",
              lg: "row",
              md: "row",
              xl: "row",
            }}
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
                  display: { md: "flex" },
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
            <Stack direction="row">
              <SearchBox>
                <Stack direction="row" alignItems="center">
                  <Search>
                    <Stack direction="row">
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        onChange={(e) => handleSearch(e.target.value)}
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
          </Stack>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default Navbar;
