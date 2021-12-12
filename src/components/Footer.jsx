import React from "react";

import {
  SContainer,
  SRow,
  SColumn,
  STitle,
  SLink,
  SCopyright,
  SFooterItem
} from "./FooterStyle";

export const Footer = () => {
  return (
    <SContainer>
      <SRow>
        <SColumn>
          <STitle>About Clinic</STitle>
          <SLink to="/">ホーム</SLink>
          <SLink to="/AboutUsPage">当院について</SLink>
          <SLink to="/MenuPricePage">メニュー・料金</SLink>
          <SLink to="ResearvationPage">予約状況</SLink>
          <SLink to="ContactPage">お問い合わせ</SLink>
        </SColumn>
        <SColumn>
          <STitle>Infomation</STitle>
          <SFooterItem>営業時間 : 10:00 - 21:00 </SFooterItem>
          <SFooterItem>住所 : 新潟県十日町市 </SFooterItem>
        </SColumn>
        <SColumn>
          <STitle>Contact</STitle>
          <SFooterItem>LINE : </SFooterItem>
          <SFooterItem>電話番号 : </SFooterItem>
          <SFooterItem> メール : </SFooterItem>
        </SColumn>
        <SColumn>
          <STitle>Social</STitle>
          <SLink to="#">instagram</SLink>
          <SLink to="#">note</SLink>
        </SColumn>
      </SRow>
      <SCopyright>
        &copy; {new Date().getFullYear()} Netsu Osteopathic Clinic
      </SCopyright>
    </SContainer>
  );
};
