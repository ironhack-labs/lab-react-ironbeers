import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import ShowInfoBeer from './ShowInfoBeer';

const STATUS = {
  ISLOADING : 'loading',
  ISLOADED : 'loaded',
  ERROR : 'error'
}

class RandomBeer extends Component{

  state = {
    status : STATUS.ISLOADING,
    beer : ""
  }

  componentDidMount(){
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) =>{
        const randomNumber = Math.floor(Math.random() * response.data.length); 
        console.log(response.data[randomNumber])
        this.setState({
          beer : response.data[randomNumber],
          status : STATUS.ISLOADED
        })
      })
      .catch(error =>{
        this.setState({
          status : STATUS.ERROR
        })
      })
  }

  render(){
    const {beer, status} = this.state
    return(
      <div>
        {status === 'loading' && <h3>Loading data</h3> }
        {status === 'loaded' && <ShowInfoBeer beer={beer} />}
      </div>
    )
  }
}

export default RandomBeer