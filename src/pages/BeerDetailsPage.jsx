import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BeerDetailsPage() {
    const [detail, setDetails] = useState(null);
    const { beerId } = useParams();

    const getDetails = async (_id) => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`);
            setDetails(response.data);
        } catch (error) {
            console.log('error fetching details', error);
        }
    };

    useEffect(() => {
        getDetails(beerId);
    }, [beerId]);

    return (
        <div>
            {detail && (
                <div>
                    <img src={detail.image_url} alt="beer image" />
                    <h1>{detail.name}</h1>
                    <h2>{detail.tagline}</h2>
                    <h3>{detail.first_brewed}</h3>
                    <h3>{detail.attenuation_level}</h3>
                    <p>{detail.description}</p>
                    <p>{detail.contributed_by}</p>
                </div>
            )}
        </div>
    );
}

export default BeerDetailsPage;
