import React from "react";
import styled from "styled-components";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Access } from "../components/container/Access";
import { ImageSlider } from "../components/container/ImageSlider";
import { CustomerComments } from "../components/container/CustomerComments";
import { Footer } from "../components/footer/Footer";
import { Notification } from "../components/container/Notification";

import ImageConcept from "../public/LINE_ALBUM_clinic_220628.png";
import ImageMenu from "../public/LINE_ALBUM_clinic_220301_1.jpg";
import titleImage from "../public/calendar.jpeg";

export const Home = () => {
  return (
    <>
      <SEO title={"SALON MEME TOPページ"} />
      <Header />
      <Hero>
        <SImageWrapper>
          <STitleOnImage>めめ</STitleOnImage>
          <STextOnImage>
            <p>女性施術者による女性専用サロンです。</p>
            <p>
              それぞれのお身体、体調に合わせたオーダーメイドの施術を行います。
            </p>
          </STextOnImage>
          <ImageSlider />
          <Notification />
        </SImageWrapper>
      </Hero>
      <ContainerA
        titleImage={titleImage}
        title={"Concept"}
        text={
          "『温かく優しく、柔らかな本来の「私」を見つけるひとときを過ごせる場所』をコンセプトに優しいタッチにてトリートメント、リラクゼーションを行っていきます。\n\n身体の力、緊張を緩め、心身ともにリラックスすることで身体は軽くなり心には余裕が出来てきます。余裕をつくることで今まで出来なかった、できる状態ではなかった『本来の自分を見つける』ということが出来るきっかけを作れる場所でありたいと思います。"
        }
        image={ImageConcept}
      />
      <ContainerA
        title={"Menu & Price"}
        text={
          "当サロンでは3種類のコースを設けております。\n\n日々の疲れ、頭痛、肩こり、不眠など、お客様のお悩みにあったコースを選択できます。価格帯は7,000~12,000円に設定しています。\n\n詳しい内容は「MENU&PRICE」ページからご確認ください"
        }
        image={ImageMenu}
      />
      <CustomerComments title={"Comments"} widthRatio={0} />
      <Access title={"Access"} widthRatio={0} />

      <Footer />
    </>
  );
};

const Hero = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const SImageWrapper = styled.div`
  position: relative;
  top: 30px;
  width: 90vw;
  max-width: 1200px;

  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

const STitleOnImage = styled.h1`
  position: absolute;
  font-family: "Kaisei Opti";
  top: 70px;
  font-size: 6rem;
  color: rgb(80, 80, 80);
  margin: 0 100px;
  padding-right: 1rem;
  padding-left: 1rem;
  z-index: 10;
  background: rgb(8255, 255, 255, 0.9);

  @media screen and (max-width: 768px) {
    top: 110px;
    font-size: 3rem;
    margin: 0 60px;
  }
`;

const STextOnImage = styled.div`
  position: absolute;
  top: 250px;
  color: rgb(80, 80, 80);
  background: rgb(8255, 255, 255, 0.8);
  z-index: 10;
  margin: 0 100px;
  text-align: left;
  font-size: 1.1rem;
  font-family: "Yomogi";
  font-weight: 900;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-right: 1rem;
  padding-left: 1rem;
  overflow-wrap: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    top: 200px;
    margin: 0 60px;
  }
`;
