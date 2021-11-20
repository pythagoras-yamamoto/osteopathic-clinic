import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FooterMenuButton } from "./FooterMenuButton";

// export const FooterMenu = () => {
//   return (
//     <SFooterMenu>
//       <FooterMenuButton />
//       <SFormList>
//         <ul>
//           <li className="form-list">
//             <p>電話番号</p>
//           </li>
//           <li className="form-list">
//             <p>住所</p>
//           </li>
//         </ul>
//       </SFormList>
//       <br></br>
//       <SHosName>根津整体院</SHosName>
//     </SFooterMenu>
//   );
// };

export const FooterMenu = () => {
  return (
    <SFooterMenu>
      <div>
        <SFooterMenuButton>
          <li className="LinkName">
            <Link to="/" className="LinkChild">
              ホーム
            </Link>
          </li>
          <li className="LinkName">
            <Link to="/AboutUsPage" className="LinkChild">
              当院について
            </Link>
          </li>
          <li className="LinkName">
            <Link to="/ResearvationPage" className="LinkChild">
              予約・料金
            </Link>
          </li>
          <li className="LinkName">
            <Link to="/InqueryPage" className="LinkChild">
              お問い合わせ
            </Link>
          </li>
        </SFooterMenuButton>
      </div>
      <STelinfo>
        <p className="info-child">電話番号</p>
      </STelinfo>
      <STelinfo>
        <p className="info-child">住所</p>
      </STelinfo>
      <SClinicName>
        <p className="clinic-name">© 2021 Netsu Osteopathic Clinic</p>
      </SClinicName>
    </SFooterMenu>
  );
};

// const SFooterMenu = styled.div`
//   width: 100%;
//   height: 120px;
//   background-color: #d3d3d3;
//   /* border-top: solid 5px #ffb6c1; */
//   /* border-bottom: solid 5px #ffb6c1; */
//   opacity: 0.8;
// `;

// const SHosName = styled.p`
//   text-align: center;
//   position: center;
// `;

const SFooterMenu = styled.div`
  width: 100%;
  background-color: #d3d3d3;

  .tel-info {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -40px;
  }
  .access-info {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -30px;
  }
  @media screen and (max-width: 780px) {
  }
  /* position: relative; */
  /* top: 20px; */
  /* left: 40%; */
`;

const SFooterMenuButton = styled.ul`
  display: flex;
  justify-content: center;
  .LinkName {
    list-style: none;
    float: left;
    margin: 20px;
  }
  .LinkChild {
    text-decoration: none;
    color: #ffffff;
  }
`;

const STelinfo = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 0px;
  margin: 5px 10px 5px 0;

  .info-child {
    display: inline-block;
    border-radius: 8px;
    background-color: white;
    width: 100px;
    height: 30px;
  }
`;

const SClinicName = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 0.5em;
  padding-bottom: 15px;
`;
