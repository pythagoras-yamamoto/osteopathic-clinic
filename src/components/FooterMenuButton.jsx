import styled from "styled-components";
import React from "react";

//フッター部分のメニューボタンのコンポーネント

export const FooterMenuButton = () => {
  return (
    <div>
      <ul>
        <SFooterMenuButton>
          <a href="./pages/HomePage.jsx">ホーム</a>
        </SFooterMenuButton>
        <SFooterMenuButton>
          <a href="./pages/AboutUsPage.jsx">当院について</a>
        </SFooterMenuButton>
        <SFooterMenuButton>
          <a href="./pages/ReservationPage.jsx">料金・予約</a>
        </SFooterMenuButton>
        <SFooterMenuButton>
          <a href="./pages/InqueryPage.jsx">お問合せ</a>
        </SFooterMenuButton>
      </ul>
    </div>
  );
};

const SFooterMenuButton = styled.li`
  margin-top: 10px;
  display: block;
  padding: 10px;
  float: left;
`;
