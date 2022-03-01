import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import LogoIMG from "../../public/LINE_ALBUM_clinic_220301_2.jpg";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <SNav>
        <SNavContainer>
          {/* <SNavLogo to="/">Home</SNavLogo> */}
          <SLogoIage src = { LogoIMG } alt = 'LogoImage'></SLogoIage>
          <SMobileIcon onClick={toggle}>
            <FaBars />
          </SMobileIcon>
          <SNavMenu>
            <SNavItem>
              <SNavLinks to="/">HOME</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/AboutUs">ABOUT</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/MenuPrice">MENU・PRICE</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/Researvation">RESEARVATION</SNavLinks>
            </SNavItem>
            <SNavItem>
              <SNavExternalLink
                target="blank"
                href="https://meme-clinic.netlify.app/"
              >
                BLOG
              </SNavExternalLink>
            </SNavItem>
            <SNavItem>
              <SNavLinks to="/Contact">CONTACT</SNavLinks>
            </SNavItem>
          </SNavMenu>
        </SNavContainer>
      </SNav>
    </>
  );
};

const SNav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  opacity: 0.9;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const SNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

// const SNavLogo = styled(LinkR)`
//   color: black;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   font-weight: 700;
//   text-decoration: none;
//   margin-left: 30px;

//   @media screen and (max-width: 768px) {
//     margin-left: 0;
//     top: 1.2rem;
//     right: 1.5rem;
//   }
// `;

const SLogoIage = styled.img`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 30px;
`

const SMobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 60%);
  }
`;

const SNavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 30px;
  font-size: 14px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SNavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

const SNavLinks = styled(LinkR)`
  color: black;
  font-weight: 700;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #01bf71;
  }
`;

const SNavExternalLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    border-bottom: 2px solid #01bf71;
  }
`;
