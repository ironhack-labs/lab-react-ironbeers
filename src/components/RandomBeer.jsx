import React, { Component } from 'react'
import axios from 'axios'

class RandomBeer extends Component {

    state = {
        randomBeer: null
    }

    async componentDidMount(){
        try {
            let response = await axios.get (`https://ih-beers-api2.herokuapp.com/beers/random`)
            this.setState({
                randomBeer: response.data
            })
        }
        catch(err) {
            console.log('Random Beer fetch failed', err)
        }
    }

    render() {
        const {randomBeer} = this.state
        if (!randomBeer) {
            return (
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
              </div>
            )
        }
        return (
            <div>
                <div className="card" styles="width: 18rem;">
                    <img src={`${randomBeer.image_url}`} className="card-img-top" alt="..." style={{ width: 100}}/>
                    <div className="card-body">
                        <h5 className="card-title">{randomBeer.name} </h5>
                        <p className="card-text">{randomBeer.tagline}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{randomBeer.first_brewed}</li>
                        <li className="list-group-item">{randomBeer.attenuation_level}</li>
                        <li className="list-group-item">{randomBeer.description}</li>
                    </ul>
                    <div className="card-body">
                        <p>{randomBeer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomBeer;