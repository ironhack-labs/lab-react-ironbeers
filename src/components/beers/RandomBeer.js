import React, { Component } from "react"
import BeerService from '../../services/beer.service.js'

class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            RandomBeer: null
        }
        this.BeerService = new BeerService()
    }




    selectRandomBeer = () => {
        this.BeerService.getRandomBeer()
            .then(response => this.setState({
                RandomBeer: response.data
            }))
            .catch(err => console.log(err))

    }



    componentDidMount = () => {

        this.selectRandomBeer();

    }



    render = () => {


        return (

            this.state.RandomBeer ? (
                <div className="random-beer" style={{ textAlign: 'center' }}>
                    <img src={this.state.RandomBeer.image_url} alt={this.state.RandomBeer.name} style={{ width: '10%' }} />
                    <h4 className="mt-5">{this.state.RandomBeer.name}</h4>
                    <p>{this.state.RandomBeer.tagline}</p>
                    <p>{this.state.RandomBeer.first_brewed}</p>
                    <p>{this.state.RandomBeer.attenuation_level}</p>
                    <p style={{ padding: "0 100px" }}>{this.state.RandomBeer.description}</p>
                    <p>{this.state.RandomBeer.contributed_by}</p>
                </div >
            ) : (
                <>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                        <div>Loading...</div>
                    </div>
                </>
            )

        )

    }


}

export default RandomBeer