import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';

import Home from './Home';
import Beers from './Beers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={Home} />
        <Route path="/new-beer" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
