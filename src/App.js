import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
