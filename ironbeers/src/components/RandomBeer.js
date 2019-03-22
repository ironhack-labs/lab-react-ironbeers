import React, { Component } from 'react'
import axios from 'axios'


export default class RandomBeer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            beer: []
        }
        console.log(props)
    }

    componentDidMount() {
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then(response => {
            console.log(response)
            this.setState({beer: response.data})
        })
    }

  render() {
    return (
      <div>
           <h1>Random Beer</h1>
           <img src={this.state.beer.image_url} alt="beer" />

           {this.state.beer}

       
      </div>
    )
  }
}
