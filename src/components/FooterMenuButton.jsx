import styled from "styled-components";
import React from "react";

//フッター部分のメニューボタンのコンポーネント

export const FooterMenuButton = () => {
  return (
    <div>
      <SMenuPosition>
        <SFooterMenuButton>
          <a className="LinkName" href="./pages/HomePage.jsx">
            ホーム
          </a>
        </SFooterMenuButton>
        <SFooterMenuButton>
          <a className="LinkName" href="./pages/AboutUsPage.jsx">
            当院について
          </a>
        </SFooterMenuButton>
        <SFooterMenuButton>
          <a className="LinkName" href="./pages/ReservationPage.jsx">
            料金・予約
          </a>
        </SFooterMenuButton>
        <SFooterMenuButton>
          <a className="LinkName" href="./pages/InqueryPage.jsx">
            お問い合せ
          </a>
        </SFooterMenuButton>
      </SMenuPosition>
    </div>
  );
};

const SFooterMenuButton = styled.li`
  margin: 10px 20px;
  position: relative;
  display: block;
  padding: 10px;
  float: left;
  .LinkName {
    color: #000000;
  }
`;
const SMenuPosition = styled.ul`
  width: 50%;
  margin-left: 30%;
`;
