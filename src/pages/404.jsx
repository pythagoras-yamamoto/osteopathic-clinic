import React from "react";
import styled from "styled-components";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export default function NotFound() {
  return (
    <>
      <SEO title={"SALON MEME"} />
      <Header />
      <SWrapper>
        <h1>404 : ページが見つかりません</h1>
      </SWrapper>
      <Footer />
    </>
  );
}

const SWrapper = styled.div`
  display: table;
  text-align: center;
  width: 100vw;
  height: 80vh;

  h1 {
    display: table-cell;
    vertical-align: middle;
    font-size: 1.5rem;
  }
`;
