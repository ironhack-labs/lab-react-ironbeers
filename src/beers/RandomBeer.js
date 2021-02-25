import React from 'react'
import { Component } from 'react'
import Beer from './Beer'
import BeerService from '../service/beer.service'


class BeerList extends Component {

    constructor () {
        super()
        this.state = {
            data: BeerService
        }
    }

    randomBeer() {
        const random = Math.floor(Math.random() * BeerService.length)
        const dataCopy = [this.state.data]

        dataCopy.push(BeerService[random])

        this.setState({
            BeerService: dataCopy
        })
    }


    render() {
        return(
            <div>
                {this.state.data.map(elm => <Beer {...elm}/> )}
            </div>
            
        )

    }



}
export default BeerList