
import React, {Component} from 'react';
import {  Navbar, NavbarBrand } from 'reactstrap';

class Header  extends Component {

 render(){
  return (
    
      <Navbar className="barra">
        <NavbarBrand href="/" className="mr-auto"> <img src="/images/home-icon.png" alt="home" /> </NavbarBrand>
      </Navbar>
    
  );
  }

}

export default Header;