import React from "react";
import TopBar from "../navbar/TopBar";
import MainBar from "../navbar/MainBar";
import MenuBar from "../navbar/MenuBar";
import Corousel from "../corousel/Corousel";

const Navbar = () => {
  return (
    <div>
      <TopBar />
      <MainBar />
      <MenuBar />
      <Corousel />
    </div>
  );
};

export default Navbar;
