import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { NavSidebar } from "./components/NavSidebar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavSidebar />
        <Router />
      </BrowserRouter>
    </div>
  );
}
