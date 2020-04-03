import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class RandomBeer extends Component {

    constructor() {
        super();
        this.state = { listOfBeer: [] };
      }
    
      getTheBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(responseFromApi => {
          this.setState({
            listOfBeer: responseFromApi.data
          });
        });
      };
    
      componentDidMount() {
        this.getTheBeer();
        
      }

      render(){
        
        const beer = this.state.listOfBeer
        console.log(beer)

        if(beer){
    return (
        <>
         <header>
            <Link to='/' class="navbar navbar-light bg-info text-light">
            <h1>HOME</h1>
            </Link>
        </header>
        <div className='position'>
        <img src={beer.image_url} alt='imagen cerveza' className='beer-images'></img>
        <h4 className='text-beer'>{beer.name}</h4>
        <h4 className='text-beer'>{beer.tagline}</h4>
        <h4 className='text-beer'>{beer.first_brewed}</h4>
        <h4 className='text-beer'>{beer.attenuation_level}</h4>
        <h4 className='text-beer'>{beer.description}</h4>
        <h4 className='text-beer'>{beer.contributed_by}</h4>
        </div>
        </>

    )
} else {
    return 'Is loading'
}
    }
}

export default RandomBeer;
