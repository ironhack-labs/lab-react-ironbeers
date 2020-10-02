import React, { Component } from 'react'
import beersService from './../../../service/beers.service'

import './DetailView.css'

import Header from '../../layout/HeaderMain'

class BeerDetails extends Component {
    constructor() {
        super()
        this.state = {}
        this.beersService = new beersService()
    }

    componentDidMount = () => {

        if (this.props.match) {

            this.beersService
                .getOneBeer(this.props.match.params.beerId)
                .then(response => this.setState(response.data))
                .catch(err => console.log('Error:', err))
        } else {

            this.beersService
                .getRandomBeer()
                .then(response => this.setState(response.data))
                .catch(err => console.log('Error:', err))
        }
    }

    render() {

        return (

            <>

                <Header />

                <main className='detail-view'>

                    <div className='container'>

                        <div className='row'>

                            <div className='image col-lg-6 d-flex justify-content-center'>

                                <img alt={this.state.name} src={this.state.image_url} />

                            </div>

                            <div className='info col-lg-6'>

                                <h2>{this.state.name} | <span style={{ color: 'grey' }}>{this.state.attenuation_level}</span></h2>

                                <h3>{this.state.tagline} | <span style={{ color: 'black' }}>{this.state.first_brewed}</span></h3>

                                <p>{this.state.description}</p>

                                <small style={{ color: 'grey', fontWeight: '900' }}>{this.state.contributed_by}</small>

                            </div>
                        </div>
                    </div>


                </main>

            </>


        )
    }
}

export default BeerDetails