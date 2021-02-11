import React from 'react';
import axios from 'axios';
import './Beers.css';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beersList: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                this.setState({
                    beersList: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h3>Beers</h3>
                {
                    this.state.beersList.map(beer => {
                        return <div key={beer.name} className="beerItem">
                        <div className="beerItemImg">
                            <img src={beer.image_url} alt={beer.name} />
                            </div>
                            <div className="beerItemText">
                            <Link to="/beers/:beerId">
                                <h4>{beer.name}</h4>
                                <h6>{beer.tagline}</h6>
                                <p>Created by: {beer.contributed_by.split("<", 1)}</p>
                            </Link>
                            </div>
                           
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Beers
