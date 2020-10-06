import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import BeerCard from './BeerCard'

class Beers extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        Axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                this.setState({
                    beers: response.data
                })
            })
    }

    render() {
        const beers = this.state.beers

        return (
            <div>
                <div className="home-beers">
                    <Link to="/" style={{ textAlign: 'center' }}>
                        <img className="home-icon-img" src="../igloo-solid.svg" alt="Home" />
                    </Link>
                </div>
                <div className="container">
                    <div className="row">
                            {beers.length ? beers.map(beer => <BeerCard beer={beer}></BeerCard>) : <p>Loading...</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Beers
