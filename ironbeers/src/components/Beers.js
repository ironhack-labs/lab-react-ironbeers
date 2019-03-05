import React, { Component } from 'react';
import BeerRow from './services/BeerRow';
import axios from 'axios';



export default class Beers extends Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            this.setState({beers: response.data})
        })
    }



    render = () => (
    <div>
      {this.state.beers.map((beer, index) => {
            return <BeerRow  key={index} {...beer}/> })}
    </div>
  )
}
