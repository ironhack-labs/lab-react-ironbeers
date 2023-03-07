import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setRandomBeer(response);
            })
            .catch((e) => console.error(e))
    }, []);

    if (!randomBeer) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div className='one-beer-page'>
            <Header />
            <div className='beer-image'>
                <img src={randomBeer.image_url} alt='beer img' />
            </div>
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeer