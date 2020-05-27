import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Beer = ({ beer }) => {
    return (
        <Link to={`/beers/${beer._id}`}>
            <Card>
                <img src={beer.image_url} alt={beer.name} />
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.description}</p>
            </Card>
        </Link>
    );
}

export default Beer;