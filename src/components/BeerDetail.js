import axios from 'axios'
import React, { Component } from 'react'

export default class BeerDetail extends Component {

    state = {
        beers : []
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers : response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.beers.filter(beer => beer._id === this.props.match.params.beerId).map(beer => (
                        <div style={{marginBottom:"30px", padding:"20px", gap:"20px"}} key={beer._id}>
                                <img style={{width:"100px"}} src={beer.image_url} alt=""/>
                                <div>
                                    <h2>{beer.name}</h2>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.first_brewed}</p>
                                    <p>{beer.attenuation_level}</p>
                                    <p>{beer.description}</p>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
