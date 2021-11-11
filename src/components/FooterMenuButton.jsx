import styled from "styled-components";
import React from "react";

//フッター部分のメニューボタンのコンポーネント
export const FooterMenuButton = () => {
  return (
    <div className="LinkButton">
      <a className="home" href="./pages/HomePage.jsx">
        ホーム
      </a>
      <a className="about" href="./pages/AboutUsPage.jsx">
        当院について
      </a>
      <a className="reservation" href="./pages/ReservationPage.jsx">
        料金・予約
      </a>
      <a className="inquery" href="./pages/InqueryPage.jsx">
        お問合せ
      </a>
    </div>
  );
};
