import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const NavSlidebarContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
`;

export const CloseIcon = styled(Fatimes)`
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
`;
