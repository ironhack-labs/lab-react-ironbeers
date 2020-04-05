import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'

export class Beers extends Component {
    constructor() {
        super();
        this.state = {
            listOfBeers: []
        };
    }
    getBeers = () => {

        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(responseFromApi => {
                this.setState({
                    listOfBeers: responseFromApi.data

                })
            })
    }
    componentDidMount() {
        this.getBeers();
    }
    searchFilter = (search) => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search.target.value}`)
            .then(responseFromApi => {
                this.setState({
                    listOfBeers: responseFromApi.data

                })
            })
    }

render() {
    return (
        <div>
            <NavBar/>

            <input type="text"
                placeholder="Searh"
                name="name"
                value={this.state.name}
                onChange={this.searchFilter}
            />

            {this.state.listOfBeers.map(beers => {

                return (


                    <p className='beer-image'>
                        
                        <Link to={`/beers/${beers._id}`}><img src={beers.image_url} alt="" /></Link>
                        <h1>{beers.name}</h1>
                        <h4>{beers.tagline}</h4>
                        <h6>{beers.contributed_by}</h6>
                        <hr/>
                    </p>
                )
            })}
        </div>
    )
}
}

export default Beers
