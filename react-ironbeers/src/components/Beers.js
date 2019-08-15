import React, { Component } from 'react'
import Services from '../services/beers.services'

class Beers extends Component {
    constructor() {
        super()
        this.state = { beers: [] }
        this.service = new Services

    }

    componentDidMount() {
        this.services.getBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (

            <div>
                {

                }
            </div>

        )
    }

}

export default Beers