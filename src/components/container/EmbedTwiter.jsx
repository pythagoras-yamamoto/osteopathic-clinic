import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

export const EmbedTwitter = () => {
  useEffect(() => {
    // scriptを読み込み
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    // アンマウント時に一応scriptタグを消しておく
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Wrapper>
      <blockquote className="twitter-tweet">
        <p lang="ja" dir="ltr">
          すごくわかりやすいし、体系的なので、ワイのような弱弱にはありがたい
          <a href="https://t.co/TM83ja6CpD">https://t.co/TM83ja6CpD</a>
        </p>
        &mdash; Yudai Yamamoto (@_yy616){" "}
        <a href="https://twitter.com/_yy616/status/1463341373965230080?ref_src=twsrc%5Etfw">
          November 24, 2021
        </a>
      </blockquote>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
