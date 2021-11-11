import { HeaderMenuButton } from "./components/HeaderMenuButton";
import { HeaderMenu } from "./components/HeaderMenu";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <HeaderMenuButton>test</HeaderMenuButton>
      <HeaderMenu></HeaderMenu>
    </div>
  );
}
