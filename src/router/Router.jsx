import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { AboutUs } from "..//pages/AboutUs";
import { Contact } from "..//pages/Contact";
import { Reservation } from "../pages/Reservation";
import { MenuPrice } from "../pages/MenuPrice";
import { NotFound } from "../pages/NotFound";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/AboutUs">
        <AboutUs />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Reservation">
        <Reservation />
      </Route>
      <Route path="/MenuPrice">
        <MenuPrice />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
