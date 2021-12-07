import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import {
  SNavContainer,
  SNavLogo,
  SNavMenu,
  SNavbarExtendedContainer,
  SOpenLinksButton,
  SNavLink,
  SNavbarLinkExtended
} from "./NavbarElements";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <SNavContainer>
      <SNavLogo>
        <Link to="/">
          {/* TODO : INSERT LOGO IAMGE */}
          LOGO
        </Link>
      </SNavLogo>
      <SNavMenu>
        <SNavLink to="/">ホーム</SNavLink>
        <SNavLink to="/AboutUsPage">当院について</SNavLink>
        <SNavLink to="/ResearvationPage">サービス・料金</SNavLink>
        <SNavLink to="/ContactPage">お問い合わせ</SNavLink>

        <SOpenLinksButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {/* {extendNavbar ? <>&#10005;</> : <> &#8801;</>} */}
          {extendNavbar ? <>&#10005;</> : <FaBars />}

          {extendNavbar && (
            <SNavbarExtendedContainer>
              <SNavbarLinkExtended to="/">Home</SNavbarLinkExtended>
              <SNavbarLinkExtended to="/AboutUsPage">
                About Me
              </SNavbarLinkExtended>
              <SNavbarLinkExtended to="/ResearvationPage">
                Service & Menu
              </SNavbarLinkExtended>
              <SNavbarLinkExtended to="/ContactPage">
                Contact
              </SNavbarLinkExtended>
            </SNavbarExtendedContainer>
          )}
        </SOpenLinksButton>
      </SNavMenu>
    </SNavContainer>
  );
};
