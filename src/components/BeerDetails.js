import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

class BeerDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            beer: null
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id).then((b) => {
            this.setState({
                beer: b.data
            })
        })
    }

    render() {
        const { beer } = this.state;

        return (
            <div>
                <header>
                    <Header />
                </header>
                <div className="tl bg-light-pink br3 pa3 ma2 dib bw2 shadow-5">
                    {
                        this.state.beer
                            ? <div>
                                <img src={beer.image_url} alt="beer" height="250px" />
                                <h1>{beer.name} </h1>
                                <h3>{beer.tagline}</h3>
                                <div>First brewed : {beer.first_brewed}</div>
                                <div>Attenuation level : {beer.attenuation_level}</div>
                                <br />
                                <div>
                                    <strong>Description : </strong> {beer.description}
                                </div>
                                <div>Contributed by : {beer.contributed_by}</div>
                            </div>

                            : "Loading..."
                    }
                </div>
            </div>
        )
    }
}

export default BeerDetails 