import styled from "styled-components";
// import { HeaderMenuButton } from "./HeaderMenuButton";

export const HeaderMenu = () => {
  return (
    <SNavContainer>
      <ul>
        <SNavElement>
          <li className="nav-element-ja">
            <a hlef="#">ホーム</a>
            <p className="nav-element-en">home</p>
          </li>
          <li className="nav-element-ja">
            <a hlef="#">当院について</a>
            <p className="nav-element-en">about us</p>
          </li>
          <li className="nav-element-ja">
            <a hlef="#">予約状況・料金</a>
            <p className="nav-element-en">reservation & fee</p>
          </li>
          <li className="nav-element-ja">
            <a hlef="#">お問い合わせ</a>
            <p className="nav-element-en">inquery</p>
          </li>
        </SNavElement>
      </ul>
    </SNavContainer>
  );
};

const SNavElement = styled.div`
  list-style: none;
  padding: 30px;
  display: flex;
  justify-content: center;

  .nav-element-ja {
    margin: 0 40px;
    font-size: 15px;
  }

  .nav-element-en {
    font-size: 12px;
  }

  /*********** Responsive ***********/

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const SNavContainer = styled.div`
  background: whitesmoke;
  height: 110px;
`;

