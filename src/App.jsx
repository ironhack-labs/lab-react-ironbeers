import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderNavBar from './components/layaout/HeaderNavBar';
import Beers from './components/Beers';
import Home from './components/Home';

function App() {
  return (
    <div>
      <HeaderNavBar
        urls={[
          { name: 'Beers', target: '/beers' },
          { name: 'Random Beer', target: '/random-beer' },
          { name: 'New Beer', target: '/new-beer' },
        ]}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        {/* <Route exact path="/random-beer" component={RandomBeer} /> */}
        {/* <Route exact path="/new-beer" component={NewBeer} /> */}
      </Switch>
    </div>
  );
}

export default App;
