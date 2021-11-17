import styled from "styled-components";
import React from "react";

//フッター部分のメニューボタンのコンポーネント

export const FooterMenuButton = () => {
  return (
    <SMenuPosition>
      <ul>
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
            お問合せ
          </a>
        </SFooterMenuButton>
      </ul>
    </SMenuPosition>
  );
};

const SFooterMenuButton = styled.li`
  margin: 10px 20px;
  /* position: relative; */
  display: block;
  /* padding: 10px; */
  float: left;
  .LinkName {
    color: #ffffff;
  }
`;

const SMenuPosition = styled.div`
  position: relative;
  top: 20px;
  left: 40%;
`;

// const SMenuPosition = styled.ul`
//   width: 100%;
//   margin-left: 35%;
// `;
