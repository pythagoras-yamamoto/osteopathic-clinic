import styled from "styled-components";
import { Link } from "react-router-dom";

import { HeaderMenu } from "../components/HeaderMenu";
import { FooterMenu } from "../components/FooterMenu";

export const Page404 = () => {
  return (
    <>
      <HeaderMenu />
      <SWrapper>
        <h1>404 : ページが見つかりません</h1>
      </SWrapper>
      <FooterMenu />
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
