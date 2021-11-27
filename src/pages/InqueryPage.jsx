import styled from "styled-components";

import { HeaderMenu } from "../components/HeaderMenu";
import { ContainerA } from "../components/ContainerA";
import { FooterMenu } from "../components/FooterMenu";
import { EmbedTwitter } from "../components/EmbedTwiter";
import Image from "../../public/clinic-image.jpeg";

export const InqueryPage = () => {
  return (
    <>
      <HeaderMenu />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"お問い合わせ"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <EmbedTwitter />
      <FooterMenu />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
`;

const SImage = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 300px;
`;
