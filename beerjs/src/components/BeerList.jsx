import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerList extends Component {
    render() {
        const beers = this.props.beers
        return (
            <div>
                {beers.map((beer, index) => {
                    return (
                        <div key={index}>
                            <img src={beer.image_url} alt={beer.name} />
                            <h2 className='text'>{beer.name}</h2>
                            <h4 className='text'>{beer.tagline}</h4>
                            <p className='text'>{beer.contributed_by}</p>
                            <Link to={`/beer/${beer._id}`} key={beer._id} className='App-link'>Check Beer</Link>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default BeerList;