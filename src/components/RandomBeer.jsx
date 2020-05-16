import React, { Component } from 'react';
import Beer from "./Beer";

class RandomBeer extends Component {

  state = {
    beer: {}
  }
  
  componentDidMount() {
    console.log('ShowBeer.js - component did mount');
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({ beer: result })
      })
      .catch(e => console.log(e))
    }


  render() {

    if(!this.state.beer){
      return <h1>loading</h1>
    }
  
  
      return (
          <div>
              <Beer {...this.state.beer}/>
          </div>
      )
}}

export default RandomBeer;
