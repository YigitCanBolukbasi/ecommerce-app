import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import CarouselFirs from "../../assets/jpgCarousel/CarouselFirs.png";
import CarouselSec from "../../assets/jpgCarousel/CarouselSec.png";
import CarouselThird from "../../assets/jpgCarousel/CarouselThird.png";
import CarouselFour from "../../assets/jpgCarousel/CarouselFour.png";

const CarouselComponent = () => {
  var items = [
    {
      id: 1,
      src: CarouselFirs,
    },
    {
      id: 2,
      src: CarouselSec,
    },
    {
      id: 3,
      src: CarouselThird,
    },
    {
      id: 4,
      src: CarouselFour,
    },
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
