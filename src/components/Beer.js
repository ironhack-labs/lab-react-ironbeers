import axios from 'axios'
import React, { Component } from 'react'
import Header from './Header'

 class Beer extends Component {

    state = {
        beerDetails: null
    }

    async componentDidMount(){
        try{
            let beerId = this.props.match.params.beer
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            console.log(response)
            this.setState({
                beerDetails: response.data
            })
        }
        catch(err){
            console.log('error - Beer detail', err)
        }
    }

    render() {

        if (!this.state.beerDetails){
            return 'loading...'
        }

        const { beerDetails } = this.state

        return (
            <div>

                <Header />

                <img src={beerDetails.image_url} alt='' />

                <h1>{beerDetails.name}</h1>
                <h2>{beerDetails.tagline}</h2>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <h3>{beerDetails.contributed_by}</h3>

            </div>
        )
    }
}

export default Beer
