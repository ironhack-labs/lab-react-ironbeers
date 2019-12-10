import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/pages/Home';
import Beers from './component/pages/Beers';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          {/* <Heading /> */}
          
          <Switch>
            <Route exact path="/beers" component={Beers}  />
            <Route path="/" component={Home}  />
            {/* <Route exact path="/random-beer" render={} /> */}
            {/* <Route exact path="/new-beer" render={} /> */}
          </Switch>

        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
