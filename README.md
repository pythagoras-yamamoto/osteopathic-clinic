## サイトイメージ
#### codesandbox↓。⚠︎codesandboxのリンクから入ると画像が読み込まれません。

https://codesandbox.io/s/github/pythagoras-yamamoto/Osteopathic-Clinic

#### サンプル画像

<img width="1122" alt="スクリーンショット 2022-01-18 23 41 37" src="https://user-images.githubusercontent.com/60994397/149958707-c78a0415-f61f-4dac-b227-a3ce1ae93227.png">

<img width="1107" alt="スクリーンショット 2022-01-18 23 43 51" src="https://user-images.githubusercontent.com/60994397/149959086-47681bc1-c239-42b6-b5bd-fcbc3af9b120.png">

<img width="208"  alt="スクリーンショット 2022-01-18 23 39 05" src="https://user-images.githubusercontent.com/60994397/149958815-3ca108cb-53c7-490f-9f59-0d9b04af1f54.png">　<img width="208"  alt="スクリーンショット 2022-01-18 23 39 05" src="https://user-images.githubusercontent.com/60994397/149958815-3ca108cb-53c7-490f-9f59-0d9b04af1f54.png">




##  概要
2022年1月下旬にプレオープン予定の女性専用サロン「めめ」のwebサイト。デザインから実装まで担当。
[サロンのブログサイト](https://github.com/pythagoras-yamamoto/clinic-blog)、お問い合わせ自動化を目的とした[LINEBot](https://github.com/pythagoras-yamamoto/clinic-bot)も作成。

## 機能
#### 問い合わせフォーム
Email.jsを利用することで、問い合わせ先とサロン運営者に対して確認メールを自動で送信。
#### 予約状況確認ページ
Google CalendarとFullCalendarを連携することで、運営者が店舗のGoogle Calendarに書き込むだけで予約状況がwebサイトに反映される。ノンプログラマーでも予約状況の更新が手軽に可能。
#### ブログサイト
Gatsby,Contentful,Netlifyを利用し、ブログが投稿されると自動でデプロイされ、webサイトに反映される。ノンプログラマーでもブログ記事の更新が手軽に可能。
#### LINE bot
予約等のお問い合わせ用のLINEbotを導入し、事務作業を改善。

## 使用技術 
全体をReact(Next.js)でSSG化(予定)。スタイルの当て方にはstyled-componentを採用。アニメーション部分にはswiper,react-revealを導入。  
使用技術 : React.js, styled-components,Swiper,react-reveal, Vercel, Material UI


## 共通事項
- CSS のあて方は基本的にStyled Components(例外は認める)。
- Styled Components での命名時は関数名に大文字の S をつける。
- クラス名Container vs Wrapperの命名議論は二つの間に意味的な区分は設けず、Wrapperに統一。

## ディレクトリ構成


## Figma
https://www.figma.com/file/KKQQmN2AKF4Tz9QUc1Rfyl/Untitled?node-id=2%3A2


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

### codesandbox:

https://codesandbox.io/

使い方. 
- template で main に戻れる
- Fork して LinkSandbox 押して、メインブランチじゃない方（コミットをブランチ PR の方)にする
