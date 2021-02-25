import React from 'react';

import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/Index/Index';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <IndexPage />}></Route>
  </Switch>
);
export default Routes;
