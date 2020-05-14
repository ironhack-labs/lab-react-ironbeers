import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import BeerListFetch from '../BeerApi'



export default class Beers extends Component {

    constructor(){
        super()
        this.state = {
            beers: []
        }      
    }
      
    componentDidMount() {
        BeerListFetch.fetchAll()
        .then(data => {
            this.setState({ beers:data.data });
        }).catch(err => console.log(err))
           }
    
     
    render() {


      return (
        <div >
      
         {this.state.beers.length === 0 ? 'Loading' : this.state.beers.map(beer =>    
         <div key={beer._id} className='list-beers'>
         <div>
          <img src={beer.image_url} alt={beer.name}></img>

         </div>
         <div>
         <h1>{beer.name}</h1>
         <p>{beer.tagline}</p>
         <b>Created by: {beer.name}</b><p></p>
         <Link to={`/beers/${beer._id}`}>Details</Link>
   
         </div>
         </div>
         
         
         )}

        </div>
      ); 
    }
    }