import React, { Component } from 'react'
import Navbar from './Navbar';
import axios from 'axios';


export class RandomBeer extends Component {
    state = {
        beer: null,
    }


    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
            console.log(response.data);
            this.setState({beer: response.data})
        })
        .catch(err => {console.log(err)})
    }
    

    render() {

        if (this.state.beer === null) {
            return <div>Want any peanuts with your beer?...</div>
        }

        return (
            <div>
        <Navbar />

        <div className="details__box">
          <div className="details__image-box">
            <img
              className="details__image"
              src={this.state.beer.image_url}
              alt="beer"
            />
          </div>
          <div className="details__info-box">
            <h1>{this.state.beer.name}</h1>
            <h2>{this.state.beer.tagline}</h2>
            <div className="details__small-details">
              <p>first brewed: {this.state.beer.first_brewed}</p>
              <p>{this.state.beer.abv}% ABV</p>
            </div>
            <p>{this.state.beer.description}</p>
            <p>
              <b>{this.state.beer.contributed_by}</b>
            </p>
          </div>
        </div>
      </div>
    );
    }
}

export default RandomBeer



    // const randomNum = Math.floor(Math.random() * Math.floor(props.beers.length))
    // const foundBeer = props.beers[randomNum]
    // console.log(foundBeer);
    // // const foundBeer = props.beers.find(beer => beer._id === beerID )

