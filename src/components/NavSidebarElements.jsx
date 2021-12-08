import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavSidebarContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${(isOpen) => (isOpen ? "0" : "-100%")};
  top: 0;
  left: 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: white;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLinks = styled(Link)`
  border: 50px;
  background: white;
  white-space: nowrap;
  padding: 16px 60px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    opacity: 0.6;
    font-size: 19px;
  }
`;
