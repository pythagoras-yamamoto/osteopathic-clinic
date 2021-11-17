import styled from "styled-components";
// import { HeaderMenuButton } from "./HeaderMenuButton";
// TODO Refactoring
export const HeaderMenu = () => {
  return (
    <SNavContainer>
      <ul>
        <SNavElement>
          <li className="nav-element">
            <a href="#" className="nav-element-ja">
              ホーム
            </a>
            <p className="nav-element-en">home</p>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-element-ja">
              当院について
            </a>
            <p className="nav-element-en">about us</p>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-element-ja">
              予約状況・料金
            </a>
            <p className="nav-element-en">reservation & fee</p>
          </li>
          <li className="nav-element">
            <a href="#" className="nav-element-ja">
              お問い合わせ
            </a>
            <p className="nav-element-en">inquery</p>
          </li>
        </SNavElement>
      </ul>
    </SNavContainer>
  );
};

const SNavContainer = styled.div`
  background: white;
  height: 80px;
  z-index: 100;
  width: 100vw;
  position: fixed;
  opacity: 0.9;
`;

const SNavElement = styled.div`
  list-style: none;
  padding: 18px;
  display: flex;
  justify-content: right;

  .nav-element {
    margin: 0 40px;
    font-size: 15px;
  }

  .nav-element-ja {
    text-decoration: none;
    color: black;
    transition: 0.2s;

    :hover {
      opacity: 0.5;
    }
  }

  .nav-element-en {
    font-size: 12px;
  }

  /*********** Responsive ***********/

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
