import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import './BeerList.css';

class BeerList extends Component {
    state = {
        allBeers: [],
        searchQuery: "",
        searchResults: []
    }

    getAllBeers = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/")
        .then( (apiResponse) => {
            const data = apiResponse.data
            this.setState({ allBeers: data})
        })
        .catch( (err) => console.log(err));
    }

    handleInput = (event) => {
        const { name, value} = event.target;
        this.setState({ [name]: value })
        
        const { searchQuery } = this.state;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
        .then( (apiResponse) => {
            const beerNames = apiResponse.data.map((oneBeer, i) => {
                return oneBeer.name;
            });
            console.log(beerNames)
            this.setState({searchResults: beerNames})
        })
        .catch( (err) => console.log(err));
    }

    componentDidMount() {
        this.getAllBeers();
    }
    
    render() {
        return (            
            <div>
                <input type="text" name="searchQuery" 
                value={this.state.searchQuery} onChange={(event) => this.handleInput(event)} />

                {this.state.allBeers.map((oneBeer, i) => {
                 return (
                     this.state.searchResults.includes(oneBeer.name) || this.state.searchResults.length === 0 
                     ? (<div id="beer-container" key={oneBeer._id}>
                        <Link to={`/allbeers/${oneBeer._id}`}>
                            <img src={oneBeer.image_url} alt="Beer bottle" />
                            <h2>{oneBeer.name}</h2>
                        </Link>
                        <h3>{oneBeer.tagline}</h3>
                        <p><strong>Created by: </strong>{oneBeer.contributed_by}</p>
                        <hr />
                        </div>)
                    : null
              )})}
            </div>  
        )
    }
}

export default BeerList;