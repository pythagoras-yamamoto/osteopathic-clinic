import styled from "styled-components";
import React from "react";
import { FooterMenuButton } from "./FooterMenuButton";

export const FooterMenu = () => {
  return (
    <div className="Footermenu">
      <FooterMenuButton />
      <p>電話番号</p>
      <p>住所</p>
    </div>
  );
};
