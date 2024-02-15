import { useEffect } from "react";
import { useState } from "react";
import httpRandomBeers from "../services/randomBeers";


const RandomBeerPage = () => {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        httpRandomBeers.get()
            .then(response => {
                console.log('Random Beer Response:', response);

                if (response) {
                    setRandomBeer(response);
                    console.log('Random Beer Set:', response.data);
                } else {
                    console.error('La respuesta de la API no contiene datos válidos:', response);
                }
            })
            .catch(error => {
                console.error('Error al obtener cerveza al azar:', error);
            });
    }, []);

    if (!randomBeer) return 'Loading...';

    
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = randomBeer;
    return (
        <div>
            <img src={image_url} alt={name} />
            <h2>{name}</h2>
            <p>{tagline}</p>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
            
        </div>
    );
};

export default RandomBeerPage;