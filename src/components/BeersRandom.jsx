import { useState, useEffect } from 'react'

const BeersRandom = () => {
    const [beerRandom, setBeerRandom] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(data => setBeerRandom(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='beersdetails-container'>
            <div className='beersdetails-card'>
                <img src={beerRandom.image_url} width="80px" alt="" />
                <div>
                    <div className='flex justify-space'>
                        <p>Name: {beerRandom.name}</p>
                        <p>{beerRandom.attenuation_level} </p>
                    </div>
                    <div className='flex justify-space'>
                        <p>Tagline: {beerRandom.tagline} </p>
                        <p>{beerRandom.first_brewed} </p>
                    </div>
                    <p>Description: {beerRandom.description}</p>
                    <p>Contribution: {beerRandom.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default BeersRandom