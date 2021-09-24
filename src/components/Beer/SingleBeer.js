import React from 'react'
import Header from '../Header';

function SingleBeer(props) {
    console.log(props.match.params.beerId);

    return (
        <div>
        <Header />
        </div>
    )
}

export default SingleBeer
