import React from 'react';
import theBeers from './Beersaxios';
import Beers from './Beers';
import { Component } from 'react';



class AllBeers extends Component {
    constructor(){ 
        super()
   this.state = {
        beers: []
    }
        this.theBeers = new theBeers()
 }
    componentDidMount() {
        this.Beer() 
    }

    Beer() {
        this.theBeers
            .getAllBeers()
            .then(response => this.setState({ beers: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                {this.state.beers.map((elm) => {
                    return (
                        <Beers key={elm._id} {...elm} />

                    )
                })}
            </>
        )
    }

}

export default AllBeers;