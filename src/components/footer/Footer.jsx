import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Footer = () => {
  return (
    <SContainer>
      <SRow>
        <SColumn>
          <STitle>About Clinic</STitle>
          <SLink to="/">ホーム</SLink>
          <SLink to="/AboutUs">当院について</SLink>
          <SLink to="/MenuPrice">メニュー・料金</SLink>
          <SLink to="/Researvation">予約状況</SLink>
          <SExternalLink target="blank" href="https://meme-clinic.netlify.app/">
            ブログ
          </SExternalLink>
          <SLink to="/Contact">お問い合わせ</SLink>
        </SColumn>
        <SColumn>
          <STitle>Infomation</STitle>
          <SFooterItem>営業時間 : 10:00 - 21:00 </SFooterItem>
          <SFooterItem>
            住所 : 長野市上野2丁目1183-41　ハイツ若夢102号
          </SFooterItem>
        </SColumn>
        <SColumn>
          <STitle>Contact</STitle>
          <SFooterItem>LINE : @939didbq</SFooterItem>
          {/* <SFooterItem>電話番号 : </SFooterItem> */}
          <SFooterItem> メール : meme.hisa33@gmail.com</SFooterItem>
        </SColumn>
        <SColumn>
          <STitle>Social</STitle>
          <SLink to="https://www.instagram.com/meme.h1sa/">Instagram</SLink>
          <SLink to="#">Blog</SLink>
        </SColumn>
      </SRow>
      <SCopyright>
        &copy; {new Date().getFullYear()} Netsu Osteopathic Clinic
      </SCopyright>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 80px 60px 10px 60px;
  background: #00747f;

  @media (max-width: 1000px) {
    padding: 70px 20px 10px 20px;
  }
`;

const SColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-bottom: 30px;
`;

const SRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const SLink = styled(LinkR)`
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.8;
    transition: 200ms ease-in;
  }
`;

const SExternalLink = styled.a`
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.8;
    transition: 200ms ease-in;
  }
`;

const STitle = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

const SCopyright = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  margin: 40px 0 20px 0;
`;

const SFooterItem = styled.p`
  font-size: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
`;
