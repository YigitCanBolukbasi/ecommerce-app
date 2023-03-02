import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const data = [
  { title: "Title", subtitle: "Subtitle" },
  { title: "Title", subtitle: "Subtitle" },
  { title: "Title", subtitle: "Subtitle" },
];

const Search = styled("div")(({ theme }) => ({
  color: "black",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
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
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} paddingLeft={5}>
          <Grid xs={6} padding={5}>
            <Grid xs={12}>
              <Typography variant="h4">NTTDATA</Typography>
              <Typography variant="caption">
                Trasted global Innovator
              </Typography>
            </Grid>
            <Grid xs={8}>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                tenetur quisquam.
              </Typography>
            </Grid>
            <Grid xs={8}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
                <StyledButton>Sign Up</StyledButton>
              </Search>
            </Grid>
          </Grid>
          <Grid xs={6} padding={5}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
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
          <Stack paddingRight={5} flexDirection="row" gap={3} marginRight={12}>
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
