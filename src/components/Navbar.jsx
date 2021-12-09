import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from "./NavbarElements";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Meme</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/AboutUsPage">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/MenuPricePage">MENU & PRICE</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/ResearvationPage">RESEARVATION</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/ContactPage">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
