import React, { Component } from 'react'
import Header from "./Header"
import axios from 'axios'
import SingleBeer from './SingleBeer'

export default class OneBeer extends Component {

    state = {
        beer: null
    }

    getBeerData = () => {
        const beerId = this.props.match.params.id
        console.log(beerId);
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((res) => {
          const beer = res.data;
        //   console.log('beer in new beer', beer);
          this.setState({
            beer: beer,
          });
        });
      };

      componentDidMount() {
          this.getBeerData()
      }

    render() {
        const beer = this.state.beer

        if(!beer) return <>Fetching beer from the back</>

        return (
            <div>

            <SingleBeer beer={this.state.beer}/> 
            </div>
        )
    }
}
