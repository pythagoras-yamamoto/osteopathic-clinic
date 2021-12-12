import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SNavSidebarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: white;
  display: grid;
  align-items: center;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-100")};
  top: 0;
`;

export const SCloseIcon = styled(FaTimes)`
  color: black;
`;

export const SIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const SSidebarWrapper = styled.div`
  color: white;
`;

export const SSidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SSidebarLinks = styled(Link)`
  background: white;
  white-space: nowrap;
  padding: 30px 60px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    font-size: 20px;
    border-bottom: 1px solid #01bf71;
  }
`;
