//共通部分のレイアウト,Header,Footer
import styled from "styled-components";

import { HeaderMenu } from "./HeaderMenu";
import { FooterMenu } from "./FooterMenu";
import { Container } from "./Container";

export const BaseLayout = () => {
  return (
    <>
      <HeaderMenu />
      <Container />
      <FooterMenu />
    </>
  );
};
