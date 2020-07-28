import React, { useState } from 'react';
import BeerCard from './BeerCard';

function Beer(props) {
    const [state, setState] = useState({
        beers: props.beers,
        id: props.match.params.id
    })
    console.log('BEER PROPS, ', props)

    const renderBeer = state.beers.find(beer => beer._id === state.id)
    console.log('RENDER BEER', renderBeer)
    return (
        <div>
            <BeerCard {...renderBeer} />
        </div>
    )
}

export default Beer
