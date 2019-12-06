import React from 'react'


import { Link } from 'react-router-dom'

const BeersDetails = ({ name, description, image_url , tagline , first_brewed , attenuation_level , contributed_by }) => {
// componentDidMount = () => this.updateBeersList()

//     updateBeersList = () => {
//         this._service.getAllBeers()
//             .then(allBeers => this.setState({ beers: allBeers.data }))
//             .catch(err => console.log("Error", err))
    // }
    return (
        <div className="beers-deatils" md={4}>
            <img src={image_url} />
            <h3>{name}</h3>
            <p>{tagline}</p>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </div>
    )
}


export default BeersDetails