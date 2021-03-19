import React, { Component } from 'react'
import './../styles/beers.css'
import { Link } from "react-router-dom"


const axios = require('axios');

export default class Beers extends Component {

    state = {
        beers: null,
        searchName: ""
    }

    componentDidMount = async () => {
        try {
            const beers = await axios.get('https://ih-beers-api2.herokuapp.com/beers') ;
            this.setState({beers: beers})
        } catch(err) {
            console.log(err)
        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if(prevState.searchName !== this.state.searchName) {
            try {
                const beers = await axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q='+this.state.searchName) ;
                this.setState({beers: beers})
            } catch(err) {
                console.log(err)
            }
        }

    }

    handleSearchChange = event => {
        this.setState({searchName: event.target.value}) ;
    }

    render() {

        const {beers} = this.state ;

        return (
            <div>
                <div className="Beers__search Link">
                    <label htmlFor="beer-search">Search</label>
                    <input type="text" name="beer-search" id="beer-search" onChange={this.handleSearchChange} value={this.state.searchName}/>
                </div>
                { 
                beers 
                &&
                beers.data.map(beer => 
                    <Link 
                        className="Beers_card" 
                        key={beer._id}
                        to={"/beers/"+beer._id}>
                        <div className="Beers_images">
                            <img src={beer.image_url} alt="beer-image"/>
                        </div>
                        <div>
                            <ul>
                                <li>{beer.name}</li>
                                <li>{beer.tagline}</li>
                                <li><strong>created By</strong> {beer.contributed_by}</li>
                            </ul>
                        </div>
                    </Link>
                    )

                }

            </div>
        )
    }
}
