import React from 'react';
import axios from 'axios';
import BeerComp from '../beerComp/BeerComp.js';


export default class Beers extends React.Component {
    constructor(props){
        super(props)
    }


  allTheBeers(){
      
  return this.props.allBeers.map((beer,i)=>{
    return  <BeerComp key={i} image_url = {beer.image_url} name = {beer.name} description = {beer.description} />
     })
              
    }


render(){
console.log(this.props)
    return (
      
  
<div className = 'beerBox'>
  
  {this.allTheBeers()}
  
</div>
  
    
  
  
    );
  }
  }

