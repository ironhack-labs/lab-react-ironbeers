import React from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
//import RandomBeer from './RandomBeer';

class AllBeers extends React.Component {

    state = {
        beers: []
    }

    getData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            this.setState({
                beers: response.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
		this.getData();
	}

    render() {
        

        return (
            <div>
                <p>AllBeers</p>
                <Link to={`/`}>Home</Link> 
                <ul>
                    {this.state.beers.map(beer => {    
                        return (
                        <li key={beer._id}>
                                <Link to={`/beers/${beer._id}`}>{beer.name}</Link> 
                                <img src={beer.image_url} alt="beerImage"></img>
                                <p>{beer.tagline}</p>
                                <p>{beer.contributed_by}</p>
                                
                        </li>     
                        ) 
                    })}
                </ul>    
            </div>

        );
    }
}

export default AllBeers;