import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navigator from './Navigator';
import Random from './Random';
import NewBeer from './NewBeer';
import ListBeers from './ListBeers'; 
import Beer from './Beer'; 
import './Home.css';


export default class Home extends Component {
 

  render() {
    return (
      <div>
        <Navigator>
        </Navigator>
        <div className='linkscon'>
    <div className='boton'><Link className="linkstop" to='/beers'>List of Beers</Link></div>
    <div className='boton'><Link className="linkstop" to='/random'>Random Beer</Link></div>
     </div>
        
        {/* <Link className="" to={}>{}</Link>
        <Link className="" to={}>{}</Link> */}
        <Switch>
          <Route exact path='/beers' component={ListBeers}/>
          <Route exact path='/beers/:_id' component={Beer}/>
          <Route exact path='/random' component={Random}/>
          <Route exact path='/new' component={NewBeer}/>
          <Route exact path='/search?q={query}' component={ListBeers}/>
        </Switch>
      </div>  
    )
  }
}
