import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addFavoriteProduct } from "../../Redux/products/productsSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const favoriteİtems = useSelector((state) => state.products.favoriteItems);
  const [favorite, setFavorite] = React.useState(false);
  const [favoriteId, setFavoriteId] = React.useState([]);

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    background: favorite ? "red" : "white",
    "&:hover": {
      background: favorite ? "white" : "red",
      boxShadow: "none",
      border: "none",
      color: "#32363A",
    },
  }));

  React.useEffect(() => {
    console.log("favorite", favoriteİtems);
  }, [favoriteİtems]);

  const StyledIcon = styled(FavoriteBorderIcon)(({ theme }) => ({}));

  const CardContainer = styled(Card)(({ theme }) => ({
    position: "relative",
  }));

  const handleFavoriteButton = () => {
    setFavorite(!favorite);
  };
  const handleForwardCard = (id) => {
    setFavoriteId((prewState) => [...prewState, id]);
    console.log(favoriteId);
  };

  return (
    <>
      {products?.map((i) => (
        <Grid item xs={3}>
          <CardContainer sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={i.imageUrl}
            />
            <CardContent>
              <StyledIconButton
                onClick={() => dispatch(addFavoriteProduct(i.id))}
              >
                <StyledIcon />
              </StyledIconButton>
              <Typography gutterBottom variant="h5" component="div">
                {i.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {i.price}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {i.description.length > 65
                  ? `${i.description.substring(0, 65)}...`
                  : i.description}
              </Typography> */}
            </CardContent>
            <CardActions>
              <Typography variant="body2" color="text.secondary">
                {i.shippingMethod}
              </Typography>
            </CardActions>
          </CardContainer>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
