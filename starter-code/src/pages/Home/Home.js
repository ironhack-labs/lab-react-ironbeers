import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { StyledCardHome} from "../../styles/componentStyles"; 


export default class Home extends Component {
    render() {
      return (
    <>
      <StyledCardHome>
        <div className="card">
          <img src="/images/beers.png" alt="images"/>
            <div className="container">
              <Link to="/beers"><h2>All beers</h2></Link>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam ut nisi reiciendis nesciunt blanditiis facilis laudantium incidunt temporibus? In quo vel repudiandae voluptate dicta illum beatae necessitatibus aut corporis.</p> 
            </div>
        </div>
        <div className="card">
          <img src="/images/random-beer.png" alt=""/>
            <div className="container">
              <Link to="/random-beer"><h2>Random Beer</h2></Link>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam ut nisi reiciendis nesciunt blanditiis facilis laudantium incidunt temporibus? In quo vel repudiandae voluptate dicta illum beatae necessitatibus aut corporis.</p> 
            </div>
        </div> 
        <div className="card">
          <img src="/images/new-beer.png" alt=""/> 
            <div className="container">
            <Link to="/new-beer"><h2>New Beer</h2></Link>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam ut nisi reiciendis nesciunt blanditiis facilis laudantium incidunt temporibus? In quo vel repudiandae voluptate dicta illum beatae necessitatibus aut corporis.</p> 
            </div>
        </div> 
      </StyledCardHome>  
    </>
      );
    }
  }
  



