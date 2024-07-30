import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerDetailsPage = () => {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setBeer(data)})
            .catch((error) => setError(error.message));
    }, [beerId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!beer) {
        return <div>Loading...</div>;
    }

    const contributedBy = beer.contributed_by ? beer.contributed_by.split(' <')[0] : "Unknown";

    return(
        <div className="single-beer-container">
            <img className="beer-display-single" src={beer.image_url} alt={beer.name} />
            <div>
                <h1 className="single-beer-title">{beer.name}</h1>
                <p><strong>Attenuation level: </strong>{beer.attenuation_level}</p>
            </div>
            <div>
                <h2>{beer.tagline}</h2>
                <p><strong>First Brewed: </strong>{beer.first_brewed}</p>
            </div>
            <p>{beer.description}</p>
            <p><strong>Contributed By:</strong> {contributedBy}</p>
        </div>
    )


}

export default BeerDetailsPage;
