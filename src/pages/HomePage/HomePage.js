import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";



class HomePage extends Component {
  render() {
    return (
      <div className="allSections">
        <div className="each_section">
        <Link to="/beers">
  
          
            <h3>All Beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              facilisis, diam quis sollicitudin egestas, tellus ex commodo nibh,
              a interdum ligula justo non nulla. 
            </p>
            </Link>
        </div>
        <div className="each_section">
        
          <Link to="/random-beer">
       
            <h3>Random Beer</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              facilisis, diam quis sollicitudin egestas, tellus ex commodo nibh,
              a interdum ligula justo non nulla. 
            </p>
          </Link>
        </div>
        <div className="each_section">
          <Link to="/new-beer">
        
            <h3>New Beer</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              facilisis, diam quis sollicitudin egestas, tellus ex commodo nibh,
              a interdum ligula justo non nulla. 
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
export default HomePage;
