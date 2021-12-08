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
          <SidebarLinks to="/">ホーム</SidebarLinks>
          <SidebarLinks to="/AboutUsPage">当院について</SidebarLinks>
          <SidebarLinks to="/ResearvationPage">料金・メニュー</SidebarLinks>
          <SidebarLinks to="/ResearvationPage">予約状況</SidebarLinks>
          <SidebarLinks to="/ContactPage">お問い合わせ</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </NavSidebarContainer>
  );
};
