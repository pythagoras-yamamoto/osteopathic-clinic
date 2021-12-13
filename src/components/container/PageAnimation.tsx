import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      <SlideRoutes location={location} duration={800}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
    </>
  );
};

export default App;
