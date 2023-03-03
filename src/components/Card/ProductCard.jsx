import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MouseOverPopover from "../components/MauseOverPopover";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addFavoriteProduct } from "../../Redux/products/productsSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const favoriteİtems = useSelector((state) => state.products.favoriteItems);

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    borderRadius: "15px",
    width: "30px",
    height: "30px",
    background: "white",
    "&:hover": {
      boxShadow: "none",
      border: "none",
      color: "#32363A",
      width: "30px",
      height: "30px",
      background: "white",
    },
  }));

  const CardContainer = styled(Card)(({ theme }) => ({
    position: "relative",
    padding: "8px",
    borderRadius: "5px",
  }));

  const NameTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "18.75px",
    color: "#00254F",
  }));

  const PriceTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "16.41px",
    color: "#00254F",
    backgroundColor: "#E6EEF8",
  }));

  const DescriptionTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "14.06px",
    color: "#00254F",
  }));

  const ShippingTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "12.1px",
    color: "#000000",
  }));

  const handleFavoriteButton = (i) => {
    dispatch(addFavoriteProduct(i));
  };

  return (
    <>
      {products?.map((i) => (
        <Grid item xs={3}>
          <CardContainer sx={{ maxWidth: 345 }}>
            <Tooltip title="Please Click To Go Link">
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={i.imageUrl}
              />
            </Tooltip>
            <CardContent>
              <Tooltip title="Add favorite">
                <StyledIconButton onClick={() => handleFavoriteButton(i)}>
                  <FavoriteBorderIcon
                    sx={
                      favoriteİtems.includes(i.id)
                        ? {
                            background: "red",
                            borderRadius: "15px",
                          }
                        : { background: "white", borderRadius: "15px" }
                    }
                  />
                </StyledIconButton>
              </Tooltip>
              <NameTypography gutterBottom variant="h5" component="div">
                {i.name}
              </NameTypography>
              <PriceTypography gutterBottom variant="h5" component="div">
                {i.price}
              </PriceTypography>
              <MouseOverPopover desc={i.description}>
                <DescriptionTypography variant="body2" color="text.secondary">
                  {i.description.length > 65
                    ? `${i.description.substring(0, 65)}...`
                    : i.description}
                </DescriptionTypography>
              </MouseOverPopover>
            </CardContent>
            <CardActions>
              <ShippingTypography variant="body2" color="text.secondary">
                {i.shippingMethod}
              </ShippingTypography>
            </CardActions>
          </CardContainer>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
