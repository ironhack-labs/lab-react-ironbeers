import React from 'react'
import Service from '../service/Beer.service'

import BeersCard from './BeersCard'
import beersDetails from './BeersDetails'

class BeersList extends React.Component {

    constructor() {
        super()
        this._service = new Service()
        this.state = {
          beers: []
        }
    }
    componentDidMount = () => this.updateBeersList()

    updateBeersList = () => {
        this._service.getAllBeers()
            .then(allBeers => this.setState({ beers: allBeers.data }))
            .catch(err => console.log("Error", err))
    }
    render() {
        return (
            
            <div>
                {this.state.beers.map(beers => <BeersCard key={beers._id} {...beers} />)}
            </div>
            
                

        )
    }
}

export default BeersList