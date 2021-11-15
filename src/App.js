// import { HeaderMenuButton } from "./components/HeaderMenuButton";

import "./styles.css";
import { HeaderMenu } from "./components/HeaderMenu";
import { FooterMenu } from "./components/FooterMenu";

import Image from "./clinic-image.jpeg";

export default function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <img src={Image} alt="" height={900} width={1440} />
      <FooterMenu />
    </div>
  );
}
