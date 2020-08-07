import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }
    componentDidMount = async () => {
        const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState(state => ({
            ...state,
            beers: data
        }))
    }
    getAllBeers = () => {
        const {beers} = this.state
        return beers.map(beer => (
            <div key={beer._id}>
                <div className='all-beer-card d-flex flex-row'>
                    <div className='all-beer-image-box d-flex align-items-center justify-content-center'>
                        <img src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div className='all-beer-info d-flex flex-column justify-content-center'>
                        <Link to={'/beers/' + beer._id}><h5>{beer.name}</h5></Link>
                        <p>{beer.tagline}</p>
                        <span><b>Created by: </b>{beer.contributed_by}</span>
                    </div>
                </div>
                <hr />
            </div>
        ))
    }
    render() {
        return (
            <div>
                <Header />
                {this.getAllBeers()}
            </div>
        )
    }
}

export default AllBeers