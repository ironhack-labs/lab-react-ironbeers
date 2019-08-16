import React, { Component } from 'react'
import axios from 'axios'

class Beers extends Component {
  constructor() {
    super()
    this.state = {
      beers: ''
    }

  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers/')
      .then(response => {
        this.setState({
          beers: response.data
        })
        console.log(this.state)
      })
      .catch(err => console.log(err))

  }

  render() {

    console.log(this.state.beers)

    return (
      <div>
        <h1>These are the beers</h1>

        {this.state.beers ? this.state.beers.filter((elm, idx) => idx <= 20).map((elm, idx) => <img src={elm.image_url} alt={idx} />) : "Waiting for the beers..."}

      </div>
    )
  }
}




export default Beers