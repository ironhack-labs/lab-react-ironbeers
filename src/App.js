import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';

import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Switch>
          {/* <Route exact path="/detail/:country" render={(routeProps) => <CountryDetails {...routeProps} countries={this.state.countries} />} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
        </Switch>    
      </div>
    );
  }
}

export default App;
