import styled from "styled-components";
import React from "react";

//フッター部分のメニューボタンのコンポーネント

export const FooterMenuButton = () => {
  return (
    <div className="LinkButton">
      <a href="./pages/HomePage.jsx">ホーム</a>
      <a href="./pages/AboutUsPage.jsx">当院について</a>
      <a href="./pages/ReservationPage.jsx">料金・予約</a>
      <a href="./pages/InqueryPage.jsx">お問合せ</a>
    </div>
  );
};
