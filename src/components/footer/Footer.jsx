import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Footer = () => {
  return (
    <SContainer>
      <SRow>
        <SColumn>
          <STitle>About Salon</STitle>
          <Link href="/" target="blank">
            <SExternalLink>ホーム</SExternalLink>
          </Link>
          <Link href="/AboutUs" target="blank">
            <SExternalLink>当サロンについて</SExternalLink>
          </Link>
          <Link href="/MenuPrice" target="blank">
            <SExternalLink>メニュー・料金</SExternalLink>
          </Link>
          <Link href="/Reservation" target="blank">
            <SExternalLink>予約状況</SExternalLink>
          </Link>
          <SExternalLink
            target="blank"
            href="https://memesalon-blog.netlify.app/"
          >
            ブログ
          </SExternalLink>
          <Link href="/Contact" target="blank">
            <SExternalLink> お問い合わせ</SExternalLink>
          </Link>
        </SColumn>
        <SColumn>
          <STitle>Information</STitle>
          <SFooterItem>営業時間 : 10:00 - 21:00 </SFooterItem>
          <SFooterItem>
            住所 : 長野市上野2丁目1183-41　ハイツ若夢102号
          </SFooterItem>
        </SColumn>
        <SColumn>
          <STitle>Contact</STitle>
          <SFooterItem>LINE : @939didbq</SFooterItem>
          <SFooterItem> メール : meme.hisa33@gmail.com</SFooterItem>
        </SColumn>
        <SColumn>
          <STitle>Social</STitle>
          <SExternalLink
            target="blank"
            href="https://www.instagram.com/meme.h1sa/"
          >
            Instagram : meme.h1sa
          </SExternalLink>
        </SColumn>
      </SRow>
      <SCopyright>&copy; {new Date().getFullYear()} Salon Meme</SCopyright>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: 80px 60px 10px 60px;
  background: #fff5f7;
  font-family: "Lato";

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

const SLink = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  color: black;

  &:hover {
    opacity: 0.8;
    transition: 200ms ease-in;
  }
`;

const SExternalLink = styled.a`
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 200ms ease-in;
  }
`;

const STitle = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 40px;
  font-weight: bold;
`;

const SCopyright = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 0.8rem;
  margin: 40px 0 20px 0;
`;

const SFooterItem = styled.p`
  font-size: 14px;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
`;
