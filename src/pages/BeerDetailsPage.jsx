
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function BeerDetailsPage() {

    const [oneBeer, setOneBeer] = useState({});
    const { beerId } = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers/${beerId}`)
            .then(response => {
                setOneBeer(response.data)
            })
            .catch((e) => {
                console.log("Error getting beer details from API", e);
            });

    }, [])

    return (
        <>
            <div key={oneBeer._id}>
                <img
                    src={oneBeer.image_url}
                    alt={oneBeer.name}
                    height={300}
                    width={100} />

                <h1>{oneBeer.name}</h1>
                <h3>"{oneBeer.tagline}"</h3>
                <p>{oneBeer.first_brewed}</p>
                <p>{oneBeer.attenuation_level}</p>
                <p>{oneBeer.description}</p>
                <p>{oneBeer.contributed_by}</p>
            </div>
        </>
    );
}

export default BeerDetailsPage;