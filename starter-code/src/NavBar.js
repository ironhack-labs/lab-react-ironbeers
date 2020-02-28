import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends React.Component {
  render() {
    
    return (
      <div className="NavBar">
        <Link to="/"><img src="images/home-7-24.png" alt="home"/></Link>
      </div>
    );
  }
}