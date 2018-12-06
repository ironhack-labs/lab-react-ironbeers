import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
// import Header from "./Components/Header/Header.js"

class Beers extends Component {
    constructor() {
        super()
        this.state = {
            listOfBeers: null
        }
    }
    getAllBeers = () => {
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
            .then(responseFromApi => {
                console.log(responseFromApi.data)
                this.setState({
                    listOfBeers: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllBeers();
    }

    render() {

    //    return ()
        // <Header></Header>
        if (this.state.listOfBeers) {
            return (<div>
                <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    {this.state.listOfBeers.map((beer) => {
                        return (
                            <div style={{ width: '33%' }}>
                                <img src={beer.image_url} style={{ width: '20%', height: '40%' }} />
                                <Link to={`/beers/${beer._id}`}><h1>{beer.name}</h1></Link>
                                <h2>{beer.tagline}</h2>
                                <p>Created by: {beer.name}</p>
                                <p>{beer.contributed_by}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>)

        }
        else {
            return <p>The IronBeers are on their way</p>
        }
    }
}

export default Beers;