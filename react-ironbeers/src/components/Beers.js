import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Beercard from './Beercard';

class Beers extends Component {
    constructor(){
        super();
        this.state = { listOfBeers: [] };
    }
  
    getAllBeers = () =>{
      axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        })
      })
    }
  
    componentDidMount() {
      this.getAllBeers();
    }

  render(){
    return(
        <div>
          { this.state.listOfBeers.map( beer => {
            return (
              <div>
                  <Link to={`beers/${beer._id}`}>
                  <Beercard beerimg={beer.image_url} beername={beer.name} beerdescription={beer.description}/>
                  </Link>
              </div>
            )})
          }
        </div>
    )
  }
}

export default Beers;