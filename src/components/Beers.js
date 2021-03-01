import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Beers extends Component {
    state = {
        beers : [],
        searchBeers: ''
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers : response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    changeHandler = event => {
        this.setState({
            searchBeers: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchBeers} onChange={this.changeHandler}/>
                {
                    this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.searchBeers.toLowerCase())).map(beer => (
                        <Link to={`/beers/${beer._id}`} key={beer._id}>
                        <div style={{display:"flex", marginBottom:"30px", padding:"20px", gap:"20px"}} >
                                <img style={{width:"100px"}} src={beer.image_url} alt=""/>
                                <div>
                                    <h2>{beer.name}</h2>
                                    <p>{beer.tagline}</p>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}
