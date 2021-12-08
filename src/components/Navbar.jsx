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
              <NavLinks to="/">ホーム</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/AboutUsPage">当院について</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/ResearvationPage">料金メニュー・予約状況</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="/ContactPage">お問い合わせ</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
