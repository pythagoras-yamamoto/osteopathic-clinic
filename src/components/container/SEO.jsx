import React from "react";
import { Helmet } from "react-helmet";

export const SEO = (props) => {
  const { title } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="リラクゼーションサロン「めめ」のHPです。"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
      ></meta>
      // OGPやフォントの記述も共通化するとGOOD!
      {/* OGP ここから */}
      <head prefix="og: http://ogp.me/ns#" />
      <meta property="og:url" content="OGPに掲載するページのURL" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="リラクゼーションサロン「めめ」" />
      <meta
        property="og:description"
        content="女性施術者による女性専用のリラクゼーションサロンです。それぞれのお身体、体調に合わせたオーダーメイドの施術を行います。"
      />
      <meta property="og:site_name" content="リラクゼーションサロン「めめ」" />
      <meta property="og:image" content="OGPに掲載する画像" />
      {/* OGP ここまで */}
      {/* Google Font ここから */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      {/* Google Font ここまで */}
    </Helmet>
  );
};
