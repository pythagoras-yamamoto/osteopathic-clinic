import React from "react";
import { FaBars } from "react-icons/fa";

import {
  SNav,
  SNavContainer,
  SNavLogo,
  SMobileIcon,
  SNavMenu,
  SNavItem,
  SNavLinks
} from "./NavbarStyle";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <SNav>
        <SNavContainer>
          <SNavLogo to="/">Meme</SNavLogo>
          <SMobileIcon onClick={toggle}>
            <FaBars />
          </SMobileIcon>
          <SNavMenu>
            <SNavItem>
              <SNavLinks to="/">HOME</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/AboutUsPage">ABOUT</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/MenuPricePage">MENU & PRICE</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/ReasearvationPage">RESEARVATION</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/ContactPage">CONTACT</SNavLinks>
            </SNavItem>
          </SNavMenu>
        </SNavContainer>
      </SNav>
    </>
  );
};
