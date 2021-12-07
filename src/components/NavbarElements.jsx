import styled from "styled-components";
import { Link } from "react-router-dom";

export const SNavContainer = styled.nav`
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

export const SNavLogo = styled.h1`
  color: black;
  justify-self: start;
  cursor: pointer;
`;

export const SNavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  text-align: center;
  justify-content: end;
  width: 70vw;
  list-style: none;
`;

export const SNavLink = styled(Link)`
  transition: 0.2s;
  padding-left: 2em;
  font-weight: bold;
  font-size: 15px;
  color: black;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SOpenLinksButton = styled.button`
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

export const SNavbarExtendedContainer = styled.div`
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

export const SNavbarLinkExtended = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
