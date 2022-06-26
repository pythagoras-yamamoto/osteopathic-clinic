## サイトイメージ
#### 公開URL : https://memesalon.vercel.app/
 -->
#### サンプル画像

#### PC
<img width="1100" alt="スクリーンショット 2022-01-18 23 41 37" src="https://user-images.githubusercontent.com/60994397/149958707-c78a0415-f61f-4dac-b227-a3ce1ae93227.png">
<img width="1100" alt="スクリーンショット 2022-01-18 23 43 51" src="https://user-images.githubusercontent.com/60994397/149959086-47681bc1-c239-42b6-b5bd-fcbc3af9b120.png">
<img width="1100" alt="スクリーンショット 2022-01-19 0 08 06" src="https://user-images.githubusercontent.com/60994397/149963375-0ac29176-6547-4a2f-93b5-cc0b1f03a9c6.png">

#### タブレット
<img width="328" alt="スクリーンショット 2022-01-18 23 54 34" src="https://user-images.githubusercontent.com/60994397/149961263-776439d9-9eba-4802-bdc3-bb20f63623a4.png">　<img width="327" alt="スクリーンショット 2022-01-18 23 56 39" src="https://user-images.githubusercontent.com/60994397/149962881-0b1bbefb-1126-4007-9189-2a02eb2451b7.png">

#### スマホ
<img width="210" alt="スクリーンショット 2022-01-19 0 02 12" src="https://user-images.githubusercontent.com/60994397/149962410-e53092a5-a6c1-4a99-83c8-421f57cae00c.png">　<img width="208"  alt="スクリーンショット 2022-01-18 23 39 05" src="https://user-images.githubusercontent.com/60994397/149958815-3ca108cb-53c7-490f-9f59-0d9b04af1f54.png">　<img width="210" alt="スクリーンショット 2022-01-18 23 53 00" src="https://user-images.githubusercontent.com/60994397/149961293-cd80e983-f3b7-4fc2-8d5d-c7712cbcac16.png">　


##  概要
2022年2月上旬にプレオープン予定の女性専用サロン「めめ」のwebサイト。デザインから実装まで担当。
[サロンのブログサイト](https://github.com/pythagoras-yamamoto/clinic-blog)、お問い合わせ自動化を目的とした[LINEBot](https://github.com/pythagoras-yamamoto/clinic-bot)も作成。

## 機能
#### 問い合わせフォーム
Email.jsを利用することで、問い合わせ先とサロン運営者に対して確認メールを自動で送信。
#### 予約状況確認ページ
Google CalendarとFullCalendarを連携することで、運営者が店舗のGoogle Calendarに書き込むだけで予約状況がwebサイトに反映される。ノンプログラマーでも予約状況の更新が手軽に可能。
#### ブログサイト
Gatsby,Contentful,Netlifyを利用し、ブログが投稿されると自動でデプロイされ、webサイトに反映される。ノンプログラマーでもブログ記事の更新が手軽に可能。

## 使用技術 
全体をReactで構築。スタイルの当て方にはstyled-componentを採用。MaterialUIを導入したので新しくCSS書く際にはこちらも利用。アニメーション部分にはreact-slick,react-revealを導入。  
使用技術 : React.js, styled-components,react-slick,react-reveal, Vercel, Material UI


## ディレクトリ構成


## 参考
### ディレクトリ構成・命名規則:

https://zenn.dev/a_da_chi/articles/80879f4813ecac

https://qiita.com/punkshiraishi/items/24ac8abbd661e8062f52?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items


### styled components:

https://zenn.dev/syu/articles/0f92abf7f0b5c5

https://gist.github.com/kenmori/60bf7b67819061f41ce960617c035955

### react-reveal:

https://www.react-reveal.com/

### 選定技術:

https://qiita.com/ozora/items/33e00dcaca372db04560

