import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { searchProduct } from "../../Redux/products/productsSlice";

const data = [
  { title: "Title", subtitle: "Subtitle" },
  { title: "Title", subtitle: "Subtitle" },
  { title: "Title", subtitle: "Subtitle" },
];

const Search = styled("div")(({ theme }) => ({
  background: "white",
  width: "80%",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  background: "white",
}));

const Container = styled(Box)(({ theme }) => ({
  background: "#0059BC",
  color: "white",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#00254F",
  padding: "10px",
  marginLeft: "40px",
  "&:hover": {
    backgroundColor: "#0059BC",
    color: "white",
  },
}));

function Footer() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchProduct(e));
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} paddingLeft={5}>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} padding={5}>
            <Grid xs={12}>
              <Typography variant="h4">NTTDATA</Typography>
              <Typography variant="caption">
                Trasted global Innovator
              </Typography>
            </Grid>
            <Grid xs={8}>
              <Typography sx={{ display: { xs: "none", md: "flex" } }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                tenetur quisquam.
              </Typography>
            </Grid>
            <Grid xs={8}>
              <Search>
                <Stack flexDirection="row" justifyContent="flex-end">
                  <Box>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                  </Box>
                  <StyledInputBase
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <StyledButton>Search</StyledButton>
                </Stack>
              </Search>
            </Grid>
          </Grid>
          <Grid md={6} lg={6} xl={6} padding={5}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={5}
                lg={12}
                xl={12}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {data.map((x) => (
                  <Grid xs={4}>
                    <Box>
                      <ListItem>
                        <Typography variant="h5">{x.title}</Typography>
                      </ListItem>
                      <ListItem>
                        <Stack>
                          <Typography>{x.subtitle}</Typography>
                          <Typography>{x.subtitle}</Typography>
                          <Typography>{x.subtitle}</Typography>
                          <Typography>{x.subtitle}</Typography>
                        </Stack>
                      </ListItem>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        paddingX="50px"
        padding={2}
      >
        <Typography marginLeft={9}>contact@gmail.com</Typography>
        <Typography>+902141234123</Typography>
        <Box>
          <Stack
            paddingRight={5}
            flexDirection="row"
            gap={3}
            marginRight={12}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Twitter />
            <Facebook />
            <Instagram />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Footer;
