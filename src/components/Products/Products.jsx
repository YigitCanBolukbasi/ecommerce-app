import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ProductCard from "../Card/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  getProductsAsync,
  filterFavoriteProduct,
} from "../../Redux/products/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const favoriteProducts = useSelector((state) => state.products.favoriteItems);
  const handleLiked = useSelector((state) => state.products.liked);

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
            <Button onClick={() => dispatch(filterFavoriteProduct())}>
              {handleLiked ? "Show All" : "Show Liked"}
            </Button>
          </Stack>
        </Box>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <ProductCard products={items} />
        </Grid>
      </Box>
      <Stack alignItems="center" justifyContent="center" margin="50px">
        <Button>More...</Button>
      </Stack>
    </Container>
  );
}

export default Products;
