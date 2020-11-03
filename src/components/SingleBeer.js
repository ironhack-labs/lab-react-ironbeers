import React, { Component } from 'react'
import axios from 'axios';
//import {Link} from 'react-router-dom';
import Header from './header/Header';
  
export default class SingleBeer extends Component {
    

    state = {
        
      
        beer: {}
      };
    
      componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
        .then((response)=> {
          console.log(response)
          this.setState({
            beer: response.data
          })
        })
      }
    
    
    
    render() {
      const beer=this.state.beer;  
      return (
            <div>
                <Header/>{ ' '}
                <div key={beer._id} className='single-beer-container'>
                  <img className='single-beer-img'
                  src={beer.image_url}alt={beer.name}/>
                  <div className='name-rating'>
                    <h1>{beer.name}</h1>
                    <h2> {beer.attenuation_level}</h2>
                  </div>
                  <div className='tag-brewed'>
                    <h5>{beer.tagline}</h5>
                    <h5>{beer.first_brewed}</h5>
                  </div>
                  <h4>{beer.description}</h4>
                  <p>{beer.contributed_by}</p>
                </div>
            </div>
        )
    }
}
