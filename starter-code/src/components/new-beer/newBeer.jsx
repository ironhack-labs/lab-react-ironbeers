import React, { Component } from 'react'
import axios from "axios" 

export default class NewBeer extends Component {

    state = {
      name: "",
    }
  
  
    setBeer = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    // post to the API
    sendBeerToApi = (e) => {
      e.preventDefault()
      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name: this.state.name})
      .then((result) => {
        console.log(result)
      })
    }
  
    render() {
    return (
      <div>
        NewBeer
        <form onSubmit={this.sendBeerToApi}>
          <input type="text" name="name" onChange={this.setBeer} />
          <input type="submit" value="add a beer" />
        </form>
      </div>
    )
  }
}
