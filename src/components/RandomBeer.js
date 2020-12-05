import React, { Component } from 'react'
import axios from "axios"
import BeerCard from './BeerCard'

export default class SingleBeer extends Component {
    state = {
        beer : null
    }

    getRandomBeerFromApi = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => { 
            const randomBeer = response.data
            this.setState({
                beer: randomBeer
            })
        })
    }

    componentDidMount() {
        this.getRandomBeerFromApi()
    }

    render() {
        const beer = this.state.beer
        console.log(beer)
        if(!beer) return <>lodading</>
        return (
            <div>
                <BeerCard 
                    image_url={beer.image_url}
                    name={beer.name}
                    tagline={beer.tagline}
                    attenuation_level={beer.attenuation_level}
                    first_brewed={beer.first_brewed}
                    description={beer.description}
                    contributed_by={beer.contributed_by}
                />
                {/* <img src={beer.image_url} alt=""/>
                <div class="details-header" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                    <div>
                        <h2>{beer.name}</h2>
                        <span>{beer.tagline}</span>
                    </div>
                    <div>
                        <h2>{beer.attenuation_level}</h2>
                        <p><strong>{beer.first_brewed}</strong></p>
                    </div>
                </div>
                <p>{beer.description}</p>
                <span>{beer.contributed_by}</span> */}

            </div>
        )
    }
}

