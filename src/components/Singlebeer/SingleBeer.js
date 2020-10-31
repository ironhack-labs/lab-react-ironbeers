import React from 'react'
import NavBar from '../Navbar/NavBar'

export default function SingleBeer(props) {
    const {id} = props.match.params
    const selectedBeer = props.beers.find((beer) => {
        return beer._id === id
    })
    console.log(selectedBeer)
    return (
        <div>
            <NavBar />
            <div>
                <img style={{height: "200px"}} src={selectedBeer.image_url} alt=""></img>
                <p>{selectedBeer.name}</p>
                <p>{selectedBeer.tagline}</p>
                <p>{selectedBeer.first_brewed}</p>
                <p>{selectedBeer.attenuation_level}</p>
                <p>{selectedBeer.description}</p>
                <p>Created by: {selectedBeer.contributed_by}</p>
            </div>
        </div>
    )
}
