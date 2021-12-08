import styled from "styled-components";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Page404 = () => {
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
