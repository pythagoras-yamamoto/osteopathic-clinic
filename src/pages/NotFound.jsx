import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const NotFound = () => {
  return (
    <>
      <Header />
      <SWrapper>
        <h1>404 : ページが見つかりません</h1>
      </SWrapper>
      <Footer />
    </>
  );
};

const SWrapper = styled.div`
  display: table;
  height: 80vh;
  width: 100vw;

  h1 {
    display: table-cell;
    vertical-align: middle;
  }
`;
