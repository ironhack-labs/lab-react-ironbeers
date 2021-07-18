import React, { Component } from 'react';
import Nav from './MyNav';
import {Link} from 'react-router-dom';

class Beers extends Component {

    render() {
        const {beers} = this.props
        return (
            <div>
                <Nav />
                <h2>All the Beers</h2>
                {
                    beers.map((beer, i) => {
                        return <div key={i}>
                                    <img src={beer.image_url} style={{width: '50px'}} alt={beer.name}/>
                                    <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                                    <p>{beer.tagline}</p>
                                    <p>Contributor: {beer.contributed_by} </p>

                        </div>
                    })
                }
            </div>
        )
    }
}

export default Beers;