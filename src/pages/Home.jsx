import React from "react";
import Card from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import MenuNavbar from "../components/Menu/MenuNavbar";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <MenuNavbar />
      <Carousel />
      <div>
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
