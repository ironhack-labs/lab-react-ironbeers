
import React, { Component } from 'react'
//import Header from './header/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AllBeer extends Component {
  
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response)=> {
      console.log(response)
      this.setState({
        beers: response.data
      })
    })
  }
  
  
  render() {
    return (
      <div>
         
         <div className='list'>
           {this.state.beers.map((beer)=>(
             
             <div key={beer._id} className="beer-container">
               <div className='beer-image'>
                 <img src={beer.image_url} alt={beer.name}/>
               </div>
               <div>
                 <Link to ={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                 <h5>{beer.tagline}</h5>
                 <p>
                   Created by: {beer.contributed_by}
                 </p>
               </div>
             </div>
           ))}
         </div>
     
      </div>
    )
  }
}
