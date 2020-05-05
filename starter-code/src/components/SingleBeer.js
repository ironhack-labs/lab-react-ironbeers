import React, { Component } from 'react';
import axios from 'axios';
import  {NavBar}  from './NavBar';

class SingleBeer extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.getSingleBeer = this.getSingleBeer.bind(this);
    }
   
    componentDidMount(){
        this.getSingleBeer();
    }
   
    getSingleBeer() {
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then( responseFromApi =>{
            const theBeer = responseFromApi.data;
            this.setState(theBeer);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   
    render(){
      return(
       
        <div>
        <header>
                <NavBar />
            </header>
        <div style={{width: '30%', float:"left"}}>   
          <h1>{this.state.name}</h1>
          <img src={this.state.image_url} alt={this.state.name}/>
          <h3>{this.state.tagline}</h3>
          <p>{this.state.first_brewed}</p>
          <p>{this.state.attenuation_level}</p>
          <p>{this.state.contributed_by}</p>
          <p>{this.state.description}</p>
         
        </div>
        </div>
      )
    }
  }
   
  export default SingleBeer;
  