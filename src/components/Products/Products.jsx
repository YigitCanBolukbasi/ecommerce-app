import { Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Alert from "../components/Alert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  getProductsAsync,
  filterFavoriteProduct,
} from "../../Redux/products/productsSlice";

function Products() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const favoriteProducts = useSelector((state) => state.products.favoriteItems);
  const handleLiked = useSelector((state) => state.products.liked);

  const StyledButton = styled(Button)(({ theme }) => ({
    "&:hover": {
      boxShadow: "none",
      border: "none",
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
  }));

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <Container>
      <Stack
        marginBottom="50px"
        marginTop="20px"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography>Products</Typography>
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" gap={2}>
            <FavoriteBorderIcon
              sx={
                favoriteProducts.length > 0
                  ? { backgroundColor: "red", borderRadius: "20px" }
                  : ""
              }
            />
            <Typography>{favoriteProducts.length} product</Typography>
            <Tooltip
              title={
                favoriteProducts.length > 0 ? "Show Favorites" : "Empty List"
              }
            >
              <StyledButton onClick={() => dispatch(filterFavoriteProduct())}>
                {handleLiked ? "Show All" : "Show Liked"}
              </StyledButton>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <ProductCard products={items} />
        </Grid>
      </Box>
      <Stack alignItems="center" justifyContent="center" margin="50px">
        <Alert open={open} setOpen={setOpen} />
        {!handleLiked && (
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            More...
          </Button>
        )}
        {handleLiked && favoriteProducts.length < 1 && (
          <Typography>you haven't liked anything yet</Typography>
        )}
      </Stack>
    </Container>
  );
}

export default Products;
