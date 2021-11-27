import styled from "styled-components";

//ヘッダー部分のメニューボタンのコンポーネント
export const HeaderMenuButton = (props) => {
  const { children } = props;
  return (
    <>
      <SButton>
        <button>{children}</button>
      </SButton>
      <button>{children}</button>
    </>
  );
};

const SButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  &:hover + .button {
    background: blue;
    color: white;
  }
`;

// .button:hover + .result{
//   background: #E72458;
// }
