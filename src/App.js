import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartHomeOnly from './beercomponent/StartHomeOnly';
import StartOther from './beercomponent/StartOther';

export default function App() {
  return (
    <div>
      <Switch>
        {/* Version 4 
        <Route exact path="/" component={StartHomeOnly} />
        <Route component={StartOther} />
        */}

        <Route exact path="/">
          <StartHomeOnly />
        </Route>
        <Route path="*">
          <StartOther />
        </Route>
      </Switch>
    </div>
  );
}
