import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


export default class RandomBeer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            beer: {},
        }
    };

    componentDidMount() {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                this.setState({
                    beer: response.data,
                })
            })
            .catch(error => console.log(error)); 
    }

    render() {
        const { beer } = this.state;

        return(
            <div>
                <NavBar/>
                <h1>RANDOM</h1>

                <div className="">
                    { beer && (
                        <>
                            <div>
                                <img src={beer.image_url} alt={beer.name}/>
                            </div>
                            <div>
                                <div>{beer.name}</div>
                                <div>{beer.tagline}</div>
                            </div>
                            <div>
                                <div>{beer.first_brewed}</div>
                                <div>{beer.attenuation_level}</div>
                            </div>
                            <div>
                                <div>{beer.description}</div>
                                <div>{beer.contributed_by}</div>
                            </div>
                        </>
                    )}
                </div>
                <Link to='/'>Go Back Home</Link>
            </div>
        );
    }

}