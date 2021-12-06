import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <SNavWrapper>
      <SNavLogo>
        <Link to="/" className="nav-link-element">
          {/* TODO : INSERT LOGO IAMGE */}
          LOGO
        </Link>
      </SNavLogo>
      <SNavMenu id={showLinks ? "hidden" : ""}>
        <SNavLink to="/">Home</SNavLink>
        <SNavLink to="/AboutUsPage">About Me</SNavLink>
        <SNavLink to="/ResearvationPage">Service & Menu</SNavLink>
        <SNavLink to="/ContactPage">Contact</SNavLink>
        <OpenLinksButton>&#8801;</OpenLinksButton>
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
  grid-gap: 10px;
  text-align: center;
  justify-content: end;
  width: 70vw;
  list-style: none;
`;

const SNavLink = styled(Link)`
  transition: 0.2s;
  padding-left: 2em;
  font-weight: bold;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }

  /* @media screen and (max-width: 780px) {
    display: none;
  } */
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
