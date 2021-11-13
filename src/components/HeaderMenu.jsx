import styled from "styled-components";
import { HeaderMenuButton } from "./HeaderMenuButton";

export const HeaderMenu = () => {
  return (
    <SNavContainer>
      <ul>
        <SNavElement>
          <li>
            <a hlef="#">Home</a>
          </li>
          <li>
            <a hlef="#">当院について</a>
          </li>
          <li>
            <a hlef="#">予約状況・料金</a>
          </li>
          <li>
            <a hlef="#">お問い合わせ</a>
          </li>
        </SNavElement>
      </ul>
    </SNavContainer>
  );
};

const SNavElement = styled.li`
  list-style: none;
  font-size: 20px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-around;
`;

const SNavContainer = styled.nav`
  background: whitesmoke;
  height: 100px;
`;
