import React, { Component } from 'react';

//components
import BeerCard from '../../BeerCard/BeerCard'
import Loader from "react-loader-spinner";

const axios = require('axios');


class RandomBeer extends Component {

    state = {
        loading: true,
        beer:null
    }

    getRandomBeer (){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then( response => {
          this.setState({
              beer: response.data,
              loading: false
            })
          })
        .catch( error => console.log(error))
    }

    

    componentDidMount() {
        this.getRandomBeer()
      }

    render() {

        return (
            <div className="randomBeerContainer">
                {this.state.loading ?
                (<div className="container-fluid m-5">
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                </div>)
                :
                    <BeerCard beer={this.state.beer}/>
                }
            </div>
        );
    }
}

export default RandomBeer;