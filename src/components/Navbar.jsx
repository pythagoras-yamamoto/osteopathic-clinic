import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <SNavWrapper>
      <SNavLogo>
        <Link to="/">
          {/* TODO : INSERT LOGO IAMGE */}
          LOGO
        </Link>
      </SNavLogo>
      <SNavMenu>
        <SNavLink to="/">Home</SNavLink>
        <SNavLink to="/AboutUsPage">About Me</SNavLink>
        <SNavLink to="/ResearvationPage">Service & Menu</SNavLink>
        <SNavLink to="/ContactPage">Contact</SNavLink>
        <OpenLinksButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <> &#8801;</>}

          {extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/AboutUsPage">
                About Me
              </NavbarLinkExtended>
              <NavbarLinkExtended to="/ResearvationPage">
                Service & Menu
              </NavbarLinkExtended>
              <NavbarLinkExtended to="/ContactPage">Contact</NavbarLinkExtended>
            </NavbarExtendedContainer>
          )}
        </OpenLinksButton>
      </SNavMenu>
    </SNavWrapper>
  );
};

const SNavWrapper = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  width: 100vw;
  position: fixed;
  opacity: 0.9;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const SNavLogo = styled.h1`
  color: black;
  justify-self: start;
  cursor: pointer;
`;

const SNavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  text-align: center;
  justify-content: end;
  width: 70vw;
  list-style: none;
`;

const SNavLink = styled(Link)`
  transition: 0.2s;
  padding-left: 2em;
  font-weight: bold;
  font-size: 15px;
  color: black;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const OpenLinksButton = styled.button`
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

//🍔作り中

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 200px;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);

  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;
