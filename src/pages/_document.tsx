import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>SALON MEME</title>
          <link rel="icon" href="../public/favicon.ico" />
          <meta
            name="description"
            content="女性施術者による女性専用のリラクゼーションサロンです。それぞれのお身体、体調に合わせたオーダーメイドの施術を行います。"
          ></meta>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
          ></meta>
          {/* OGP ここから */}
          <head prefix="og: http://ogp.me/ns#" />
          <meta property="og:url" content="https://memesalon.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="リラクゼーションサロン「めめ」" />
          <meta
            property="og:description"
            content="女性施術者による女性専用のリラクゼーションサロンです。それぞれのお身体、体調に合わせたオーダーメイドの施術を行います。"
          />
          <meta
            property="og:site_name"
            content="リラクゼーションサロン「めめ」"
          />
          <meta property="og:image" content="../../public/roader1.jpg" />
          {/* OGP ここまで */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;