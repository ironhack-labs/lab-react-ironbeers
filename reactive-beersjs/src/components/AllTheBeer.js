import React, { Component } from 'react'
import Api from '../services/beers-services'
import Beer from './Beer-Template'

class AllTheBeer extends Component {
  
    constructor() {
        super()
        this.state = {
            allBeers: [],
        }
        this.services = new Api()
    }

    componentDidMount() {
        this.services.getAllBeers()
            .then(beers => this.setState({ allBeers: beers }))
            console.log('yeah',this.state.allBeers)
    }

    render() {
        return (
            <div className='list'>
                {this.state.allBeers.map((theBeer, idx) => <Beer key={idx} {...theBeer} />)}
            </div>
        )
    }
}
export default AllTheBeer