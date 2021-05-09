import React from 'react';
import { Link, Switch, Route, Redirect } from "react-router-dom";



class Header extends React.Component {
  render(){  
  return (
  <div className="Navbar">
  <Link to='/'><p>Home</p></Link>
  </div>
    )
  }
}

export default Header;