import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class RandomBeers extends Component {
    state = {
        beer: {}
    }

    componentDidMount() {
        axios
            .get('https://ih-beer-api.herokuapp.com/beers/random', {
                mode: 'no-cors'
            })
            .then(({ data }) => {
                this.setState({ beer: data })
                console.log(data)
            })
    }
    render() {
        const { beer } = this.state
        console.log(beer)
        return (
            <>
                <NavBar />
                <div className="card-columns">
                    <div className="card" style={{ width: '400px' }}>
                        <img className="card-img-top" src={beer.image_url} alt={beer.name} style={{ width: '60px' }} />
                        <div className="card-body" >
                            <h5 className="card-title" >{beer.name}</h5>
                            <p>{beer.tagline} {beer.first_brewed} {beer.attenuation_level}</p>
                            <p className="card-text">{beer.description}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



