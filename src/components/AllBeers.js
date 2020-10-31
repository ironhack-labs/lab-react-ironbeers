import React, { Component } from 'react'
import axios from 'axios' 
import BeersList from './BeersList'

export default class AllBeers extends Component {

    state= {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                //console.log('my response.deta: ', response.data[0].name)
                this.setState({
                    beers: response.data
                })
            })
    }


    render() {
        return (
            <div>
                
                <h3 style={{color: 'gray'}}>In all beers page</h3>
                <BeersList beers={this.state.beers} />
            </div>
        )
    }
}




