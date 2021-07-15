import React, { Component } from 'react';
import AllBeers from './AllBeers.js'
import RandomBeer from './RandomBeer.js'
import NewBeer from './NewBeer.js'
import NavBar from '../navBar/NavBar.js'

class BeersContainer extends Component {
    constructor() {
        super()
        this.state = {
            wichBeer: '',
        }
    }

    selectRender = (which) => {
        this.setState({
            whichBeer: which,
        })


    }


    componentDidMount = () => {
        this.selectRender(this.props.match.params.whichBeer)
    }

    render = () => {


        return (

            <>
                <NavBar />

                {
                    this.state.whichBeer === '' ?
                        'Cargando...' :
                        this.state.whichBeer === 'all' ?
                            <AllBeers /> :
                            this.state.whichBeer === 'random' ?
                                <RandomBeer /> :
                                this.state.whichBeer === 'new' ?
                                    <NewBeer /> :
                                    <h1 className="text-center">Incorrect URL</h1>
                }

            </>

        )
    }
}

export default BeersContainer