import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderNavBar from './components/layaout/HeaderNavBar';
import Footer from './components/layaout/Footer';
import Beers from './components/Beers';
import Beer from './components/Beer';
import Home from './components/Home';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="bg-white">
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
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/random-beer" component={Beer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
