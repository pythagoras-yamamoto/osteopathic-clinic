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

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Meme</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ホーム</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">当院について</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="about">料金・メニュー</NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks to="about">お問い合わせ</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};
