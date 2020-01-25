import React, { Component } from 'react';
import axios from "axios";
import Navbar from './Navbar'

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            beer : []
         }
        this.getAllBeers = this.getAllBeers.bind(this);
    }



    getAllBeers() {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then(responseFromApi => {
            this.setState({
              beer: responseFromApi.data
            });
          });
      }
    
      componentDidMount() {
        this.getAllBeers();
      }


    render() { 
        const {beer} = this.state
        return (
            <div>
            <Navbar />
            <div>
            <div class="card" style={{ width: 400 }}>
                 <img src={beer.image_url} class="card-img-top" />
                 <div class="card-body">
                   <h3 class="card-title">{beer.name}</h3>
                   <p class="card-text">
                   {beer.description}
                   </p>
                 </div>
                 </div>
           </div>
           </div>
          );
    }
}
 
export default RandomBeer;