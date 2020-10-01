import React from 'react'
import axios from 'axios'
const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random'

export default class RandomBeer extends React.Component {


    state = {
        beerData: []
    }


    componentDidMount() {
        axios
            .get(apiUrl)
            .then(response => {
                console.log(response.data)
                this.setState({
                    beerData: response.data
                })
            })
            .catch(error => console.log(error))
    }


    render() {

        return (
                <>
                    <img src={this.state.beerData.image_url} alt="beer" />
                    <p><strong>name</strong> {this.state.beerData.name}</p>
                    <p><strong>tagline</strong> {this.state.beerData.tagline}</p>
                    <p><strong>first brewed</strong> {this.state.beerData.first_brewed}</p>
                    <p><strong>attenuation level</strong> {this.state.beerData.attenuation_level}</p>
                    <p><strong>description</strong> {this.state.beerData.description}</p>
                    <p><strong>contributed by</strong> {this.state.beerData.contributed_by}</p>
                </>
            
        )

    }
}