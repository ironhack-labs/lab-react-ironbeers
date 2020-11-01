import React, { useEffect, useState } from 'react';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeers from './components/RandomBeers';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Mynav from './components/Mynav';
import SingleBeer from './components/SingleBeer';

export default function App() {
  return (
    <div>
      <Mynav />
      <Switch>
        <Route path="/beers" component={AllBeers} />;
        <Route path="/beersDetail/:beerId" component={SingleBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/random-beer" component={RandomBeers} />
      </Switch>
    </div>
  );
}
