import React from "react";
import CarouselComponent from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import MenuNavbar from "../components/Menu/MenuNavbar";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

function Home() {
  return (
    <div>
      <Navbar />
      <MenuNavbar />
      <CarouselComponent />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
