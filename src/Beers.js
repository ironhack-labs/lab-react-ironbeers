import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
    state = {
        beers: []
    };
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(res => {
                console.log('getting beer:', res.data)
                this.setState({
                    beers: res.data
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="Beers" >
                <NavBar />
                <div className="beerContainer" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    {this.state.beers.map(beer => {
                        return (
                            <div className="beer" key={beer._id}>
                                <img src={beer.image_url} width="80px" />
                                <div className="text">
                                    <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                                    <h4>{beer.tagline}</h4>
                                    <p>Created by: {beer.contributed_by}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )

    }
}

export default Beers;