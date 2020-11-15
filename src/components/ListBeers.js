import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import NewBeer from './NewBeer';

class ListBeers extends Component {
    constructor() {
        super();
        this.state = { 
              beers: []
        };
      }
      getAllBeers = () => {
      axios.get(`https://api.punkapi.com/v2/beers`)
        .then(responseFromApi => {
          this.setState({
              beers: responseFromApi.data
            });
          });
          
      };

      allBeers = (beer) => {
        const beersCopy = [...this.state.beers]
        beersCopy.push(beer)
        this.setState({
            beers: beersCopy
          });
      }
      
      componentDidMount() {
        this.getAllBeers();
      }

    render(){
        return(
            <>
            <Navbar/>
            {this.state.beers.map((beer, index) => {
              return (
                
                <div className="cardBeer" key={index}>
                
                <div className="containerCard">
                    <div className="cardImg">
                        <img src={beer.image_url} alt={beer.name} className="imgBeer"/>
                    </div>
                    <div className="cardText">
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <Link to={`/beers/${beer.id}`}><button>Check the details</button></Link>
                    </div>
                    
                </div>
                  <hr/>
                </div>
                    
              );

            })}
        

            </>
        )
    }
}
export default ListBeers