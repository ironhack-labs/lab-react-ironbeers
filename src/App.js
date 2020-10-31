import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import AllBeers from './components/AllBeers'
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
          <header className="header flex">
      <Link to="/">
      <i className="fas fa-home fa-4x" id="home-icon"></i> 
      </Link>
    </header>

      <Switch>
      <Route  exact path='/' component = {Home}/>
      <Route exact path="/beers" component={AllBeers} />
      </Switch>
      </div>
      
    )
  }
}
{/* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/beers" component={AllBeers} />
<Route exact path="/beers/:id" component={OneBeer} />
<Route path="/random-beer" component={RandomBeer} />
<Route path="/new-beer" component={NewBeer} />
</Switch> */}






export default  withRouter(App);
