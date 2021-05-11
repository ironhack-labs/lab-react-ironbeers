import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default class Beers extends Component {

    state= {
        beerList: [],
        searchField: ''
    }

    componentDidMount = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {

            this.setState({
                beerList: response.data
            }) ;
        })
        .catch(err => console.log(err))
    }

    searchBeers = e => {
        this.setState({
            searchField: e.target.value
        })
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.searchField}`)
        .then(response => {
            this.setState({
                beerList: response.data
            })
        })
        .catch(err => console.log(err))
        
    }

    render() {

        const mappedBeers = this.state.beerList.map(beer => (
             <div className="beerListDiv">
                <img src={beer.image_url} style={{width:'40px', height: '120px'}} />
                <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Contributed by {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>See details</Link>
                </div>
             </div>
            ))

        
        return (
            <div className="beers">
                <h1>Beers</h1>
                <input placeholder="Search" onChange={this.searchBeers} type="text" value={this.state.searchField}/>

                { mappedBeers }
            </div>
        )
    }
}
