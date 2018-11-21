import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class BeerRandom extends Component {
    constructor(props){
      super(props);
      this.state = {};
    }

    getBeer = () => {
      //const { params } = this.props.match;
      axios.get(`https://ironbeer-api.herokuapp.com/beers/random`/*, {withCredentials:true}*/)
      .then( responseFromApi =>{
        const theBeer = responseFromApi.data;
        this.setState(theBeer[0]);
        console.log(this.state)
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  
    render(){
        
            if( Object.keys(this.state).length <= 0) {
                this.getBeer()
                console.log(this.state)
            }
          
        return(
            <div>
              <h1>I'm here working dude with a single beer</h1>
              <h2>{this.state.name}</h2>
              <img src={this.state.image_url} style={{width: "100px", height:"150px"}}/> <br />
              <p>
                Tagline: {this.state.tagline} <br />
                Contributed by: {this.state.contributed_by}<br />
                Updated at: {this.state.updated_at} <br />
                Created at: {this.state.created_at} <br />
                First brewed: {this.state.first_brewed} <br />
                Brewers tips: {this.state.brewers_tips} <br />
                Attenuation level: {this.state.attenuation_level} <br />
              </p>
              <p>{this.state.description}</p>
            </div>
          )
    }
}  


export default BeerRandom;