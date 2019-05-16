import React, { Component} from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar'


class BeerList extends Component {
  constructor(props){
    super(props);
    console.log(props);
    debugger
    
    this.state={
      beers: []
    };
  }

  // Chamando a API e obetendo as cervejas dentro de um array
  componentDidMount(){
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then( response => {
        this.setState( { beers: response.data } );       
      })
  }

  render(){
    return(
      <div>
        <Navbar />
        { this.state.beers.map( beer => <p> <img src={beer.image_url}/> {beer.name} {beer.tagline} {beer.contributed_by}</p> ) }
      </div>
    )
  }
}


export default BeerList;

