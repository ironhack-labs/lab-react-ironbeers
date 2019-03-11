import React, {Component} from 'react';
import {Link} from "react-router-dom"

const NavBar = ()=>{

  return (
    <nav style={{background:"#999" , margin:"0 0 10vh 0"}}>

      <Link to='/Home'><img src="../img/0eb6dab29d.svg" style={{width:"60px" }} /></Link>
   
    </nav>
  )
}

export default NavBar;