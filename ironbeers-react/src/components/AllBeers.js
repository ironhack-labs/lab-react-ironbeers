import React, { Component } from 'react'
import axios from 'axios';
export default class AllBeers extends Component {
  constructor() {
    super ()
    this.state = {
      beers: []
    }
  }
  componentDidMount(){
    axios
        .get("http://localhost:5000/all")
        .then(allBeersPayload => {
            const allBeers = allBeersPayload.data

            this.setState({
                ...this.state,
                beers: allBeers
            })
        })
}

  render() {
    console.log(this.state.beers)
    return (
      <div>
        {this.state.beers.map}
        <div>
            <img src={this.props.image_url}/>
            </div>
            <div>
            <p>{this.props.name}</p>
            <p>{this.props.tagline}</p>
            <p>{this.props.contributed_by}</p>
            </div>
      </div>
    )
  }
}
