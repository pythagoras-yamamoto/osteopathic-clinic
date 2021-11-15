//共通部分のレイアウト,Header,Footer
import styled from "styled-components";

import { HeaderMenu } from "./HeaderMenu";
import { FooterMenu } from "./FooterMenu";

export const BaseLayout = () => {
  return (
    <>
      <HeaderMenu />
      <FooterMenu />
    </>
  );
};
