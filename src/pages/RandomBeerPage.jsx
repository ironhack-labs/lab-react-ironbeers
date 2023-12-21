import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        const fetchRandomBeer = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
                setRandomBeer(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRandomBeer();
    }, []);

    return (
        <div className="container">
            {randomBeer ? (
                <>

                    <div className="row">
                        <div className="col-md-3">
                            <img src={randomBeer.image_url} alt={randomBeer.name} style={{ maxWidth: '80px' }} />
                        </div>
                        <h2 className="mt-4">{randomBeer.name}</h2>
                        <div className="col-md-9">
                            {randomBeer.tagline && <p>{randomBeer.tagline}</p>}
                            {randomBeer.first_brewed && <p className='text-black-50'>First Brewed: {randomBeer.first_brewed}</p>}
                            {randomBeer.attenuation_level && <p>Attenuation Level: {randomBeer.attenuation_level}</p>}
                            {randomBeer.description && <p>Description: {randomBeer.description}</p>}
                            {randomBeer.contributed_by && <p className='text-black-50'>Contributed by: {randomBeer.contributed_by}</p>}
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    );

}

export default RandomBeersPage;
