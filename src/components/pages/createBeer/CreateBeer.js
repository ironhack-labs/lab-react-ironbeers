import React, { Component } from 'react'
import beersService from './../../../service/beers.service'

import Header from '../../layout/HeaderMain'

class CreateBeer extends Component {
    constructor() {
        super()
        this.state = {}
        this.beersService = new beersService()
    }

    render() {

        return (

            <>
                <Header />

                <h1>Beer creation</h1>

            </>

        )
    }
}

export default CreateBeer