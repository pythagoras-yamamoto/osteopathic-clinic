import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <SNavItems>
      <SNavbarLogo>LOGO</SNavbarLogo>
      <div className="munu-icon"></div>
      <SNavMenu>
        <SNavLink>
          <Link to="/" className="nav-link-element">
            Home
          </Link>
        </SNavLink>
        <SNavLink>
          <Link to="/AboutUsPage" className="nav-link-element">
            About Me
          </Link>
        </SNavLink>
        <SNavLink>
          <Link to="/ResearvationPage" className="nav-link-element">
            Service & Menu
          </Link>
        </SNavLink>
        <SNavLink>
          <Link to="/ContactPage" className="nav-link-element">
            Contact
          </Link>
        </SNavLink>
      </SNavMenu>
    </SNavItems>
  );
};

const SNavItems = styled.nav`
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

const SNavbarLogo = styled.h1`
  color: black;
  justify-self: start;
  padding: 20px;
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

const SNavLink = styled.li`
  transition: 0.2s;
  padding: 0 1.2em;
  font-weight: bold;

  .nav-link-element {
    color: black;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
