import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header'

function OneBeer() {
    const [oneBeer, setOneBeer] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/' + params.id)
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setOneBeer(response);
            })
            .catch((e) => console.error(e))
    }, [params.id]);

    if (!oneBeer) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div className='one-beer-page'>
            <Header />
            <div className='beer-image'>
                <img src={oneBeer.image_url} alt='single beer img' />
            </div>
            <h2>{oneBeer.name}</h2>
            <p>{oneBeer.tagline}</p>
            <p>{oneBeer.first_brewed}</p>
            <p>{oneBeer.attenuation_level}</p>
            <p>{oneBeer.description}</p>
            <p>{oneBeer.contributed_by}</p>
        </div>
    )
}

export default OneBeer