import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const SNav = styled.nav`
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

export const SNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const SNavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    top: 1.2rem;
    right: 1.5rem;
  }
`;

export const SMobileIcon = styled.div`
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

export const SNavMenu = styled.ul`
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

export const SNavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const SNavLinks = styled(LinkR)`
  color: black;
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    border-bottom: 2px solid #01bf71;
  }
`;

// export const SNavContainer = styled.nav`;
//   background-scolor: white;
//   height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 200;
//   width: 100vw;
//   position: fixed;
//   opacity: 0.9;
//   box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
// `;

// export const SNavLogo = styled.h1`
//   color: black;
//   justify-self: start;
//   cursor: pointer;
// `;

// export const SNavMenu = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(5, auto);
//   text-align: center;
//   justify-content: end;
//   width: 70vw;
//   list-style: none;
// `;

// export const SNavLink = styled(Link)`
//   transition: 0.2s;
//   padding-left: 2em;
//   font-weight: bold;
//   font-size: 15px;
//   color: black;
//   text-decoration: none;

//   &:hover {
//     opacity: 0.5;
//   }

//   &.active {
//     border-bottom: 3px solid #01bf71;
//   }

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const SOpenLinksButton = styled.button`
//   height: 50px;
//   background: none;
//   border: none;
//   color: black;
//   font-size: 40px;
//   cursor: pointer;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

// export const SNavbarExtendedContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: white;
//   width: 200px;
//   box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

// export const SNavbarLinkExtended = styled(Link)`
//   color: black;
//   font-size: 16px;
//   font-weight: bold;
//   font-family: Arial, Helvetica, sans-serif;
//   text-decoration: none;
//   margin: 10px;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
