import React from "react";
import logo from "../../public/images/logo.gif";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full bg-white bg-opacity-10 fixed backdrop-blur-2xl px-5 py-2 shadow-md">
      <img src={logo.src} className=" w-64" />
      <div className="flex max-w-[1000px] w-full justify-between px-20 items-center">
        <div className="flex justify-around w-full text-white text-xl font-semibold max-w-[570px] ">
          <a href="#">Accueil</a>
          <a href="#">Notre Agence</a>
          <a href="#">Nos Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <button className=" min-w-[180px] text-white text-lg font-bold bg-primary-btn py-2 rounded-3xl">
            J'ai un projet!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
