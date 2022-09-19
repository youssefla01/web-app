import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import background from "../public/images/bg-accueil.webp";

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPositionY: "-500px",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
    </div>
  );
};

export default Home;
