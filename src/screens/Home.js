import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { imageUrls } from "../utils/imageData";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://1.bp.blogspot.com/-Eh2yHLam_Qk/YHKWsGL1ycI/AAAAAAABKR0/qMP6bVGqLI8NoWKWxp78P7h7mfUGtRLiwCLcBGAsYHQ/s2560/desert_sand_stars_203227_2560x1440.jpg"
  );

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setBackgroundImage(imageUrls[randomIndex]);
  }

  useEffect(() => {
    setTimeout(() => {
      getRandomImage();
    }, 2000);
  }, [backgroundImage]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        transition: "background 1s ease-in-out",
      }}
    >
      {" "}
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
