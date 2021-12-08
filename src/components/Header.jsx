import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { NavSidebar } from "./NavSidebar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      {/* <NavSidebar isOpen={isOpen} toggle={toggle} /> */}
    </>
  );
};
