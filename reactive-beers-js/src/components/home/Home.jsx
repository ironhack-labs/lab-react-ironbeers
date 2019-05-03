import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Beers from '../beers/Beers';
import sectionMenu from '../sectionMenu/SectionMenu';
import RandomBeer from '../randomBeer/RandomBeer';
import Beer from '../beer/Beer';

export default class menu extends Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/'  component={sectionMenu}/>
          <Route exact path='/beers'  component={Beers}/>
          <Route exact path='/random-beer' component={RandomBeer}/>
          <Route exact path='/new-beer' component={RandomBeer} />
          <Route exact path='/beers/:_id' component={Beer} />         
        </Switch> 
      </React.Fragment>
    )
  }
}
