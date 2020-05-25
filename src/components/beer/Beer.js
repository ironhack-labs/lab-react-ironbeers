import React from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';

const Beer = ({ beer }) => {
    const history = useHistory();
    return (
        <Card onClick={() => history.push(`/beers/${beer._id}`)}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
        </Card>
    );
}

export default Beer;