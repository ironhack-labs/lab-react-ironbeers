import React from 'react'
import Header from './Header';

export default function BeerDetails(props) {

    let getBeerDetails = id => props.location.state.beersFromUrl.find(obj => obj.id == id) //Location és la URL
    console.log(props.location.state.beersFromUrl, 'prova')
    
    const { id } = props.match.params //match treu paràmetres de la URL
    console.log(props.match.params.id, 'problemes')
    
    console.log(id, 'id')
    const foundTheBeer = getBeerDetails(id)
    console.log(foundTheBeer, 'suisidio')
    
    return (
        <div>
            <Header />
            <div>
           <img src={foundTheBeer.image} alt={foundTheBeer.name} />
           <div>
           <h1>{foundTheBeer.name}</h1>
           <h6>{foundTheBeer.tagline}</h6>
           <h6>{foundTheBeer.first_brewed}</h6>
           <h3>{foundTheBeer.attenuation_level}</h3>
           <p>{foundTheBeer.description}</p>
           <h6>{foundTheBeer.contributed_by}</h6>
           </div>
           </div>
        </div>
    )
}
