import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Footer } from "../components/footer/Footer";
import Img from "../public/LINE_ALBUM_clinic_220301_6.jpg";
import GreetImage from "../public/Message-Image.jpg";
import AchiveImage from "../public/Treatment2.jpg";

export default function AboutUs() {
  return (
    <>
      <SEO title={"SALON MEME About Usページ"} />
      <Header />
      <SImage>
        <Image src={Img} layout="fill" objectFit="cover" alt="" />
      </SImage>
      <ContainerA
        title={"Message"}
        titleImage={GreetImage}
        text={
          "数あるサイトの中から当サイトを見つけて下さりありがとうございます。\nサロン【めめ】のセラピスト【hisa】と申します。\n\nストレス社会において女性の身体はとくに影響を受けやすくなっていると感じています。歯を食いしばりながら毎日頑張りすぎていませんか？肩の力を抜くことが出来ていますか？毎日頑張っている自分を褒めてあげられていますか?\n\n疲れた心身をリフレッシュしたり、自分自身と向き合い、知ることが癒しにつながると思うから…めめはそのお手伝いができる存在になりたいと思っています。私たちの身体や心、肌の状態は日々変化しています。一人一人の方と向き合い、その日の体調に合わせたケアを継続的に行っていけるようにサポート致します。"
        }
        image={GreetImage}
      />
      <ContainerA
        title={"Acheivement"}
        titleImage={AchiveImage}
        text={"Coming Soon..."}
        image={AchiveImage}
        widthRatio={50}
      />
      <Footer />
    </>
  );
}

const SImage = styled.div`
  position: relative;
  object-fit: cover;
  width: 100vw;
  height: 200px;

  @media screen and (max-width: 600px) {
    height: 130px;
  }
`;
