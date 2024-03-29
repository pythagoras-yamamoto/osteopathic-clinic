import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Footer = () => {
  return (
    <SContainer>
      <SRow>
        <SColumn>
          <STitle>About Salon</STitle>
          <SLink to="/">ホーム</SLink>
          <SLink to="/AboutUs">当サロンについて</SLink>
          <SLink to="/MenuPrice">メニュー・料金</SLink>
          <SLink to="/Reservation">予約状況</SLink>
          <SExternalLink
            target="blank"
            href="https://memesalon-blog.netlify.app/"
          >
            ブログ
          </SExternalLink>
          <SLink to="/Contact">お問い合わせ</SLink>
        </SColumn>
        <SColumn>
          <STitle>Information</STitle>
          <SFooterItem>
            【営業時間】<br></br> &emsp;月・水・木・土・日<br></br>&emsp;10:00 -
            18:00 <br></br>&emsp;(LO：16:00) <br></br>
            &emsp;火・金<br></br>&emsp;10:00 - 20:00 <br></br>&emsp;(LO：18:00)
          </SFooterItem>
          <SFooterItem>
            【定休日】<br></br>&emsp;不定休
          </SFooterItem>
          <SFooterItem>
            【住所】<br></br>&emsp;長野市上野<br></br>&emsp;2丁目1183-41{' '}
            <br></br>&emsp;ハイツ若夢102号
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
            Instagram:
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
  font-family: 'Lato';

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
  grid-gap: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const SLink = styled(LinkR)`
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

  &:hover {
    opacity: 0.8;
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
