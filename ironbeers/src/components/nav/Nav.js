import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {


  render() {

    return (
        <div className="container">
       
        <li><NavLink exact to="/" className="NavBar">Home</NavLink></li>
        <li><NavLink exact to="/Randombeer" className="NavBar">Random Beer</NavLink></li>
        <li><NavLink exact to="/addBeer" className="NavBar">Add Beer</NavLink></li>



            
        </div>

    );
  }
}