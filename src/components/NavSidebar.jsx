import React from "react";

import {
  NavSidebarContainer,
  Icon,
  CloseIcon,
  SidebarLinks,
  SidebarWrapper,
  SidebarMenu
} from "./NavSidebarElements";

export const NavSidebar = ({ isOpen, toggle }) => {
  return (
    <NavSidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="/">Home</SidebarLinks>
          <SidebarLinks to="/AboutUsPage">About Us</SidebarLinks>
          <SidebarLinks to="/ResearvationPage">Price & Menu</SidebarLinks>
          <SidebarLinks to="/ResearvationPage">Researvation</SidebarLinks>
          <SidebarLinks to="/ContactPage">Contact</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </NavSidebarContainer>
  );
};
