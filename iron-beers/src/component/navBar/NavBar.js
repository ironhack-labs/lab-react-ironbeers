import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
   
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink activeClassName="active" exact to='/' className="list-group-item list-group-item-action my-1">Home</NavLink>
       <NavLink activeClassName="active" exact to='/allbeers' className="list-group-item list-group-item-action my-1"> All Beers</NavLink>
       <NavLink activeClassName="active" exact to='/randombeers' className="list-group-item list-group-item-action my-1"> Random Beers</NavLink>
       <NavLink activeClassName="active" exact to='/newbeer' className="list-group-item list-group-item-action my-1">Add New Beer</NavLink> 
      </nav>
       
       
    );
  }
}

export default NavBar;