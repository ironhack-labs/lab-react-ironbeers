import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beerDetails, setBeerDetails] = useState(null);

    useEffect(() => {
        const fetchBeerDetails = async () => {
            try {
                if (beerId) {
                    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
                    setBeerDetails(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBeerDetails();
    }, [beerId]);

    return (
        <div className='container'>
            {beerDetails ? (
                <>
                    <h2 className='mt-4'>{beerDetails.name}</h2>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={beerDetails.image_url} alt={beerDetails.name} className="img-fluid" />
                        </div>
                        <div className='col-md-9'>
                            {beerDetails.tagline && <p>{beerDetails.tagline}</p>}
                            {beerDetails.first_brewed && <p>First Brewed: {beerDetails.first_brewed}</p>}
                            {beerDetails.attenuation_level && <p>Attenuation Level: {beerDetails.attenuation_level}</p>}
                            {beerDetails.description && <p>Description: {beerDetails.description}</p>}
                            {beerDetails.contributed_by && <p>Contributed by: {beerDetails.contributed_by}</p>}
                        </div>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default BeerDetailsPage;
