import React, { Component } from 'react'
import Service from '../service/Service';


export default class BeerList extends Component {

  constructor(){
    super()
    
    this.state = {
      beers : []

    }

    this.service = new Service()
    this.getAllBeersinfo()

  }


getAllBeersinfo = () => {
  this.service.getAllBeers()
  .then(birra => this.setState({beers: birra }))
  .catch(err => console.log(err))   
}




  
  render() {
    return (
      <section className="beer-container">

        <article>
          {this.state.beers.map((beer, idx) => 

          <div key={idx} className="beer">

            <p className="name">{beer.name}</p>
            <img src={beer.image_url} className="image" /> 
            <p className="tagline">{beer.tagline}</p>

            <p className="description">{beer.description}</p>
            <p className="created">Created by: {beer.contributed_by}</p>

          </div>
          )}
        </article>
        
      </section>
    )
  }
}
