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
import { getProductsAsync } from "../../Redux/products/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);

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
            <FavoriteBorderIcon />
            <Typography>0 product</Typography>
            <Button>liked</Button>
          </Stack>
        </Box>
      </Stack>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {items?.map((i) => (
            <Grid item xs={3}>
              <ProductCard
                name={i.name}
                desc={i.description}
                url={i.imageUrl}
                post={i.shippingMethod}
                price={i.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack alignItems="center" justifyContent="center" margin="50px">
        <Button>More...</Button>
      </Stack>
    </Container>
  );
}

export default Products;
