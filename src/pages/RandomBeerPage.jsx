import { useEffect, useState } from "react";

const RandomBeersPage = () => {
    const [randomBeer, setRandomBeer] = useState(null);
    const [error, setError] = useState(null);  

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setRandomBeer(data);
            })
            .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!randomBeer) { 
        return <div>Loading...</div>;
    }

    const contributedBy = randomBeer.contributed_by ? randomBeer.contributed_by.split(' <')[0] : "Unknown";

    return (
        <div className="single-beer-container">
            <img className="beer-display-single" src={randomBeer.image_url} alt={randomBeer.name} />
            <div>
                <h1 className="single-beer-title">{randomBeer.name}</h1>
                <p><strong>Attenuation level: </strong>{randomBeer.attenuation_level}</p>
            </div>
            <div>
                <h2>{randomBeer.tagline}</h2>
                <p><strong>First Brewed: </strong>{randomBeer.first_brewed}</p>
            </div>
            <p>{randomBeer.description}</p>
            <p><strong>Contributed By:</strong> {contributedBy}</p>
        </div>
    );
};

export default RandomBeersPage;