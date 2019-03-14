import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homecard from './Homecard';


class Homepage extends Component {
  render() {
    return (
      <div>
       <Homecard 
       img="https://images.unsplash.com/photo-1482112048165-dd23f81c367d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
       para="Check out our selection of beers"
       head="All beers"
       link="/beers"
       />
       <Homecard 
       img="https://images.unsplash.com/photo-1551046394-ade451f541d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" 
       para="Need inspiration? Discover a random beer!"
       head="Random beer"
       link="/random-beer"
       />
       <Homecard 
       img="https://images.unsplash.com/photo-1516431375070-e29baea9e230?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" 
       para="Want to add a new beer to our selection?"
       head="New beer"
       link="/new-beer"
       />
      </div>
    );
  }
}

export default Homepage;

