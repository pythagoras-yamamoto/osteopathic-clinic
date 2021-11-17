import styled from "styled-components";

import { HeaderMenu } from "../components/HeaderMenu.jsx";
import { FooterMenu } from "../components/FooterMenu.jsx";
import Image from "../../public/clinic-image.jpeg";

export const HomePage = () => {
  return (
    <>
      <HeaderMenu />
      <SImageWraper>
        <STitleOnImage>根津整体院</STitleOnImage>
        <STextOnImage>
          女性施術者による女性専用サロンです。それぞれのお身体,
          体調に合わせたオーダーメイドの鍼灸施術を行います
        </STextOnImage>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <FooterMenu />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
`;

const STitleOnImage = styled.p`
  position: absolute;
  top: 30%;
  font-size: 80px;
  font-weight: bold;
  color: white;
  margin-left: 50px;
`;

const STextOnImage = styled(STitleOnImage)`
  text-align: left;
  font-weight: normal;
  font-size: 20px;
  width: 530px;
  margin-top: 180px;
`;

const SImage = styled.img`
  width: 100vw;
  height: auto;
`;
