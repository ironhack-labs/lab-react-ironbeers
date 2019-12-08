import React, { Component } from 'react'
import axios from "axios" 

export default class NewBeer extends Component {

    state = {
      name: "",
      image_url: "",
    }
  
  
    setBeer = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        [e.target.image_url]: e.target.value,
      })
    }

    sendBeerToApi = (e) => {
      e.preventDefault()
      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", 
      {name: this.state.name, 
        image_url: this.state.image_url})
      .then((result) => {
      })
    }
  
    render() {
    return (
      <div>
        New Beer
        <form onSubmit={this.sendBeerToApi}>
          <input type="text" name="name" onChange={this.setBeer} placeholder="Beer name"/>
          <input type="text" name="image_url" onChange={this.setBeer} placeholder="Url image"/>
          <input type="submit" value="add new beer" />
        </form> 
      </div>
    )
  }
}