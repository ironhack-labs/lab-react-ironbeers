import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';


function BeerDetails() {

    const [foundBeer, setFoundBeer] = useState(null);

    const { beerId } = useParams();
    console.log('beedId', beerId);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
            .then((response) => {
                console.log('response.data', response.data);
                setFoundBeer(response.data)
            })
    }, [beerId] );


    return (
        <div>
        <Header />
        <h1>Beer Details</h1>

            {!foundBeer && <h3>Beer not found!</h3>}

            {foundBeer && (
                <>
                    <div>
                        <img src={foundBeer.image_url} alt='beer' style={{ height: '200px'}} />
                    </div>
                    <div>
                        <h2>{foundBeer.name}</h2>
                        <h3>{foundBeer.tagline}</h3>
                    </div>
                    <div>
                        <h2>{foundBeer.attenuation_level}</h2>
                        <p>{foundBeer.first_brewed}</p>
                    </div>
                    <div>
                        <p>{foundBeer.description}</p>
                        <h5>{foundBeer.contributed_by}</h5>

                        {/* image, name, tagline, 
                        first_brewed, attenuation_level, 
                        description, contributed_by */}
                    </div>
                </>
            )}
        </div>
    );
}

export default BeerDetails;