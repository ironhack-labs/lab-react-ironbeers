import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRandomBeer = async () => {
            try {
                const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
                setRandomBeer(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching random beer: ", error);
                setLoading(false);
            }
        };

        fetchRandomBeer();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2>{randomBeer.name}</h2>
                    <p>{randomBeer.tagline}</p>
                    <p>First Brewed: {randomBeer.first_brewed}</p>
                    <p>Attenuation Level: {randomBeer.attenuation_level}</p>
                    <img src={randomBeer.image_url} alt={randomBeer.name} style={{ maxWidth: "100px" }} />
                    <p>Description: {randomBeer.description}</p>
                    <p>Contributed by: {randomBeer.contributed_by}</p>
                </>
            )}
        </div>
    );
}

export default RandomBeerPage;
