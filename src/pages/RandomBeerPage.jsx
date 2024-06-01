import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [random, setRandom] = useState(null);
    const { beerId } = useParams();

    const getRandom = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            setRandom(response.data);
        } catch (error) {
            console.log('error fetching details', error);
        }
    };

    useEffect(() => {
        getRandom(beerId);
    }, [beerId]);

    return (
        <div>
            {random && (
                <div>
                    <img src={random.image_url} alt="beer image" />
                    <h1>{random.name}</h1>
                    <h2>{random.tagline}</h2>
                    <h3>{random.first_brewed}</h3>
                    <h3>{random.attenuation_level}</h3>
                    <p>{random.description}</p>
                    <p>{random.contributed_by}</p>
                </div>
            )}
        </div>
    );
}


export default RandomBeersPage;
