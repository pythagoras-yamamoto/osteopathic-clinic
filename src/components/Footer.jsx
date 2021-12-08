import React from "react";

import {
  Container,
  Row,
  Column,
  Title,
  Link,
  Icon,
  Copyright,
  FooterItem
} from "./FooterElements";

export const Footer = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Title>About Clinic</Title>
          <Link to="#">当院について</Link>
          <Link to="#">料金・メニュー </Link>
          <Link to="#">予約状況</Link>
          <Link to="#">お問い合わせ</Link>
        </Column>
        <Column>
          <Title>Infomation</Title>
          <FooterItem>営業時間 : 10:00 - 21:00 </FooterItem>
          <FooterItem>住所 : 新潟県十日町市 </FooterItem>
        </Column>
        <Column>
          <Title>Infomation</Title>
          <FooterItem>LINE : </FooterItem>
          <FooterItem>電話番号 : </FooterItem>
          <FooterItem> メール : </FooterItem>
        </Column>
        <Column>
          <Title>Social</Title>
          <Link to="#">
            {/* <Icon className="fab fa-instagram" /> */}
            Instagram :
          </Link>
        </Column>
      </Row>
      <Copyright>
        &copy; {new Date().getFullYear()} Netsu Osteopathic Clinic
      </Copyright>
    </Container>
  );
};
