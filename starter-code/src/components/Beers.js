import React, { Component } from 'react'
import NavBar from './NavBar';

import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            beers: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then( beers => this.setState({ beers: beers.data }))
            .catch(error => console.log(error));
        ;
    }

    handleChange(e) {

        const search = e.target.value;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
            .then(response => {
                console.log(response);
                this.setState({ beers: response.data })
            })
            .catch(error => console.log(error))
    }

    render() {
        let { beers } = this.state; 

        return (
            <>
                <NavBar/>
                <input type="text" name="search" onChange={this.handleChange}/>

                {beers.map( (beer,idx) => 
                    <Link key={idx} to={`/beer/${beer._id}`}>
                        <div className="container">
                            <img src={beer.image_url} alt={beer.name}/>
                            <div className="content">
                            <h1>{beer.name}</h1>
                            <h2>{beer.tagline}</h2>
                            <p>{beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </>

        )
    }
}


export default Beers;