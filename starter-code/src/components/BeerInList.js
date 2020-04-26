import React, { Component } from 'react';
import './BeerInList.css';
import { Link } from 'react-router-dom';

class BeerInList extends Component {
    render() {
        const { beer } = this.props;

        return (
            <div className='BeerInList'>
                <Link className='BeerInList-Link' to={{ 
                        pathname: `/beers/${beer._id}`, 
                        state: {beer}
                    }
                } >
                    <div className='BeerInList-img-container'>
                        <img className='BeerInList-img' src={beer.image_url} alt={beer.name} />
                    </div>
                    <div className='BeerInList-container'>
                        <div className='BeerInList-name'>{beer.name}</div>
                        <div className='BeerInList-tagline'>{beer.tagline}</div>
                        <div className='BeerInList-contributed_by'><b>Created by: </b>{beer.contributed_by}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default BeerInList;