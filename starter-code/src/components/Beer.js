import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Beer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({ beers: response.data })
            })
    }


    render() {
        console.log(this.state.beers)
        return (
            <div>
                <Header />
                <div>
                <img src="./images/beers.png" alt="beersbild"></img>
                    <ul>
                    {this.state.beers.map(beer =>
                            (<React.Fragment key= {beer._id}>
                                <Link to={`/beers/${beer._id}`}><img className="image" src={beer.image_url} alt="beers"></img></Link>
                                <li>{beer.name}</li>
                                <li>{beer.tagline}</li>
                                <li>Created by: {beer.contributed_by}</li>
                            </React.Fragment>)
                            )
                    }
                    </ul>
                    
                </div>
            </div>
        )
    }
}
