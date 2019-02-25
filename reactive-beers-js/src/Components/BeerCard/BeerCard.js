import React, { Component } from 'react';

 import { Link } from 'react-router-dom';
import Axios from 'axios';


 export default class BeerCard extends Component {
  constructor(props){
    super(props)
    this.state ={
      beer:{}
    }
  }

  componentDidMount(){
    Axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${window.location.href.substr(28)}`)
      .then( response =>{
        
      })
  }

  render() {
    return (
      <div>
        Hola
      </div>
    )
  }
}