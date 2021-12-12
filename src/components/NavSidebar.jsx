import React from "react";

import {
  SNavSidebarContainer,
  SIcon,
  SCloseIcon,
  SSidebarLinks,
  SSidebarWrapper,
  SSidebarMenu
} from "./NavSidebarStyle";

export const NavSidebar = ({ isOpen, toggle }) => {
  return (
    <SNavSidebarContainer isOpen={isOpen} onClick={toggle}>
      <SIcon>
        <SCloseIcon />
      </SIcon>
      <SSidebarWrapper>
        <SSidebarMenu>
          <SSidebarLinks to="/">Home</SSidebarLinks>
          <SSidebarLinks to="/AboutUsPage">About</SSidebarLinks>
          <SSidebarLinks to="/MenuPricePage">Menu & Price</SSidebarLinks>
          <SSidebarLinks to="/ResearvationPage">Researvation</SSidebarLinks>
          <SSidebarLinks to="/ContactPage">Contact</SSidebarLinks>
        </SSidebarMenu>
      </SSidebarWrapper>
    </SNavSidebarContainer>
  );
};
