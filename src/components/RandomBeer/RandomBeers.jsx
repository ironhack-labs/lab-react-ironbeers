import React, { Component } from 'react'
import BeerListFetch from '../BeerApi'


export default class RandomBeers extends Component {

    constructor(){
        super()
        this.state = {
            randomBeer: []
        }      
    }
      
    componentDidMount() {
        BeerListFetch.getRandomBeer()
        .then(data => {
            this.setState({ randomBeer:data.data });
        }).catch(err => console.log(err))
           }
    


    render() {
        const { randomBeer } = this.state

        return (
            <div>
                   <div className="single-beer"><p></p>
          <img src={randomBeer.image_url} style={{width:140}} alt={randomBeer.name}></img>
         </div>
         <div>
          <h1>{randomBeer.name}</h1>
          <p>{randomBeer.tagline} </p>
          <p>{randomBeer.first_brewed}</p>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
         </div>

            </div>
        )
    }
}
