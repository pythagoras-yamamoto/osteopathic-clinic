import styled from "styled-components";

import { Header } from "../components/Header";
import { ContainerA } from "../components/ContainerA";
import { ContainerB } from "../components/ContainerB";
import { Footer } from "../components/Footer";
import { ImageSlider } from "../components/ImageSlider";

import Image from "../../public/clinic-image.jpeg";

export const HomePage = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <STitleOnImage>根津整体院</STitleOnImage>
        <STextOnImage>
          女性施術者による女性専用サロンです。それぞれのお身体,
          体調に合わせたオーダーメイドの鍼灸施術を行います
        </STextOnImage>
        <ImageSlider></ImageSlider>
        {/* <SImage src={Image} alt="" /> */}
      </SImageWraper>
      <ContainerA
        title={"CONCEPT"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <ContainerA
        title={"PRICE & MENU"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちははこんにちはこんにちはこんにちはこんにちはこんにちはこんにちこんにちはこんにちは"
        }
        image={Image}
        widthRatio={60}
      />
      <ContainerB title={"ACCESS"} image={Image} widthRatio={47} />
      <Footer />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
`;

const STitleOnImage = styled.p`
  position: absolute;
  top: 30%;
  font-size: 50px;
  font-weight: bold;
  color: white;
  margin-left: 15%;
  z-index: 100;
`;

const STextOnImage = styled(STitleOnImage)`
  text-align: left;
  font-weight: normal;
  font-size: 20px;
  width: 530px;
  margin-top: 180px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
