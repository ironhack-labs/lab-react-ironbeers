import axios from 'axios'
import React, { Component } from 'react'
import BeerCard from '../../components/BeerCard'

export default class SingleBeerPage extends Component {
        state = {
                beer: null
        }
        componentDidMount() {
                const idBeer = this.props.match.params.id;
                if (idBeer === 'random-beer') {
                        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
                                .then(beer => this.setState({ beer: beer.data }))
                                .catch(err => console.log(err))
                } else {
                        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${idBeer}`)
                                .then(beer => this.setState({ beer: beer.data }))
                                .catch(err => console.log(err))
                }

        }
        render() {
                if (!this.state.beer) {
                        return <p>Loading....</p>
                }
                const { beer } = this.state;
                return (
                        <div>
                                <BeerCard
                                        image_url={beer.image_url}
                                        name={beer.name}
                                        attenuation_level={beer.attenuation_level}
                                        tagline={beer.tagline}
                                        first_brewed={beer.first_brewed}
                                        description={beer.description}
                                        contributed_by={beer.contributed_by}
                                        name={beer.name}

                                />
                                {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
                        </div>
                )
        }
}
