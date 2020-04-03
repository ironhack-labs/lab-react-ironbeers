
import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';


class RandomBeer extends Component {
    constructor(props){
      super(props);
      this.state = { listOfBeers: [] };
    }
  
    componentDidMount(){
      this.getRandomBeer();
    }
  
    getRandomBeer = () => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      
      .then( responseFromApi =>{
        const theBeer = responseFromApi.data;
        console.log(theBeer)
        this.setState({listOfBeers: theBeer});
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  
  
  
  
    render(){
      return(
          <div>
        <Navbar/>
       
        <div className="pt-5">
        
            <img className="beerImg" src={this.state.listOfBeers.image_url} alt="" srcset=""/>
          <h1>{this.state.listOfBeers.name}</h1>
          <p className="font-weight-light">{this.state.listOfBeers.tagline}</p>
          <p className="font-weight-light">{this.state.listOfBeers.first_brewed}</p>
          <div className="textDes">
          <p className="text-justify">{this.state.listOfBeers.description}</p>
          </div>
          <p className="font-weight-light">{this.state.listOfBeers.attenuation_level}</p>
          <p>{this.state.listOfBeers.contributed_by}</p>
         
    
          </div>

  <br/><br/><br/><br/><br/>
  
          <Link to={'/Beers'}>Back to Beers</Link>
        </div>
      )
    }
  }
  
  export default RandomBeer;