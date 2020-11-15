import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
// import { Link } from 'react-router-dom';

class RandomBeer extends Component {
    constructor() {
        super();
        this.state = { 
              beers: []
        };
      }
      getAllBeers = () => {
      axios.get(`https://api.punkapi.com/v2/beers/random`)
        .then(responseFromApi => {
          this.setState({
              beers: responseFromApi.data
            });
          });
      };
      
      componentDidMount() {
        this.getAllBeers();
      }

    render(){
        return(
            <>
            {this.state.beers.map((beer, index) => {
              return (
                <div key={index}>
                    <Navbar />
                    <div className="cardImgRandom">
                        <img src={beer.image_url} alt={beer.name} className="imgBeerRandom"/>
                    </div>
                    <div className="titleRandom">
                        <h3>{beer.name}</h3>
                        <h3 className="attenuation">{beer.attenuation_level}</h3>
                    </div>
                    <div className="subTitleRandom">
                        <p className="tagline">{beer.tagline}</p>
                        <p className="brewed"><strong>{beer.first_brewed}</strong></p>
                    </div>
                    <div className="description">
                        <p>{beer.description}</p>
                    </div>
                    
                </div>
              );
            })}
            </>
        )
    }
}
export default RandomBeer

