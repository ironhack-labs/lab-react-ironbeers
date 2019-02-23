import React, { Component } from 'react';
import './App.css';
import { Link,Switch,Route } from 'react-router-dom';
import Beers from './beers/Beers'


class App extends Component {

  state = {
    home: false
  }

  render() {
    return (
      <div className="App">
      <Link to='/home'>Home</Link>
      <p>
      <Link to='/beers'>Beers</Link>
      </p>
      <p>
      <Link to="/random-beer">Random beer</Link>
      </p>
      <p>
      <Link to="/new-beer">New beer</Link>
      </p>



      <Switch>
      <Route exact path={"/beers"} component={Beers}/>
      <Route exact path={"/home"} component={Beers}/>
      <Route exact path={"/random-beer"} component={Beers}/>
      <Route exact path={"/new-beer"} component={Beers}/>
      
      
    </Switch>     
      </div>
   
    );
  }
}

export default App;
