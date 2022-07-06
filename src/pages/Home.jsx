import React from "react";
import styled from "styled-components";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Access } from "../components/container/Access";
import { ImageSlider } from "../components/container/ImageSlider";
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
          "当サロンでは3種類のコースを設けております。\n\n日々の疲れ、頭痛、肩こり、不眠など、お客様のお悩みにあったコースを選択できます。価格帯は9,000~12,000円に設定しています。\n\n詳しい内容は「MENU&PRICE」ページからご確認ください"
        }
        image={ImageMenu}
      />
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
  width: 80vw;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

const STitleOnImage = styled.h1`
  position: absolute;
  font-family: "Kaisei Opti";
  top: 70px;
  font-size: 5rem;
  color: white;
  margin: 0 100px;
  z-index: 10;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

const STextOnImage = styled.div`
  position: absolute;
  top: 220px;
  color: white;
  z-index: 10;
  margin: 0 80px;
  text-align: left;
  font-size: 1.1rem;
  font-family: "Yomogi";
  font-weight: 500;
  overflow-wrap: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
