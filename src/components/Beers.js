import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Beers.css'

export default class Beers extends React.Component {

    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => {
                this.setState({
                    beers: res.data
                })
            })
    }

    render() {
        return (
            <>
                {
                    this.state.beers.map((beer) => {
                        return (
                            <>
                                <Link to={`/beers/${beer._id}`} >
                                    <div key={beer._id} class="card beer-card" style={{ width: '100%', margin: '20px 10px' }}>
                                        <div className='card-body'>
                                            <img src={beer.image_url} class="card-img-top beer-img" alt="beer-img" />
                                        </div>
                                        <div class="card beer-card">
                                            <div>
                                                <h5 class="card-title my-beer-title">{beer.name}</h5>
                                                <p class="card-text">{beer.tagline}</p>
                                                <small>{beer.contributed_by}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={{ width: '90%' }} />
                                </Link>
                            </>
                        )
                    })
                }
            </>
        )
    }
}