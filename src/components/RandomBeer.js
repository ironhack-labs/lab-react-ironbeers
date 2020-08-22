import React, { Component } from 'react'
import axios from 'axios'
import Nav from './Nav'
import BeerCard from './BeerCard'


export default class BeerDetails extends Component {

    state = {
        beer: ''
      };
    
      componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((res) => {
          this.setState({
            beer: res.data
          });
        });
      }


    render() {

        if (!this.state.beer){
            return <p>Beer loading ....</p>
        }


        return (
        <div className="under-nav">
        <Nav/>
        <BeerCard beer={this.state.beer}/>
        </div>
        )
    }
}
