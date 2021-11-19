import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route>
        <HomePage />
      </Route>
    </Switch>
  );
});
