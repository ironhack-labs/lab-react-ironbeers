import React, { Component } from "react";
import Header from "./Header";
import axios from 'axios'

export default class Randombeer extends Component {
  constructor() {
    super();

    this.state = {
      randombeer : null
    }
  }

  componentDidMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(res => {
        
        this.setState({randombeer : res.data})
      })
  }


  render() {
    
    if(this.state.randombeer !== null){
      
      const random = this.state.randombeer[0]
      console.log(random)
      return (
        <div>
          <Header />
          <img src={random.image_url} alt=""/>
          <h2>{random.name}</h2>
          <h3>{random.tagline}</h3>
          <h4>{random.first_brewed}</h4>
          <h4>{random.attenuation_level}</h4>
          <p>{random.description}</p>
          <p>{random.contributed_by}</p>
        </div>
      );

    }else{
      return(
        <h1>LOADING...</h1>
      )
    }

  }
}
