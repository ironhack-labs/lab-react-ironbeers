import React, { Component } from "react";
import { Link } from "react-router-dom";


class Beers extends Component {
  state = {
    
  };

 

  render() {
    return (
      <div className="beers">
        <ul>
       
                
        <li>
        
            <Link to="/beers"><img src="/beers.jpeg" alt="all-beers" /></Link>
            <p className="paraph-title">All Beers</p>
            <p className="paraph-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cum quis nam libero laborum fugit sit illo porro repellendus alias! Incidunt itaque optio a excepturi ullam cum quis veniam in?</p>
          </li>
         
        <li>
        
            <Link to="/random-beer"><img src="/beers2.jpeg" alt="random-beer" /></Link>
            <p className="paraph-title">Random Beer</p>
            <p className="paraph-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cum quis nam libero laborum fugit sit illo porro repellendus alias! Incidunt itaque optio a excepturi ullam cum quis veniam in?</p>
          </li>
        <li>
        
            <Link to="/new-beer"><img src="/newbeer.jpeg" alt="new-beer" /></Link>
            <p className="paraph-title">Make your own beer</p>
            <p className="paraph-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cum quis nam libero laborum fugit sit illo porro repellendus alias! Incidunt itaque optio a excepturi ullam cum quis veniam in?</p>
          </li>
          </ul>
       
      </div>
    );
  }
}

export default Beers;

