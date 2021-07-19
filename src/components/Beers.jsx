import React, { Component } from 'react';
import Axios from 'axios';

//import { Link } from 'react-router-dom'


class Beers extends Component {
   

render() {
    console.log("beersData", this.state.beersData);
    
    return (
      <div>
       <h1>Beers List</h1>

         {this.state.beersData.map((beer) => { //pass the prop
          return (
            <div>
              <p>{beer.image}</p>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Beers;
