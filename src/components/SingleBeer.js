import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./SingleBeer.css";

function SingleBeer() {
    const { beerId } = useParams();

    const [beerDetails, setBeerDetails] = useState(null);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
            .then((response) => {
                setBeerDetails(response.data);
            })
            .catch((err) => console.error(err));
    }, [beerId]);

    const renderDetails = () => {
        return (
            <div>
                <header>
                    <Link to="/">Home</Link>
                </header>

                <section>
                    <img src={beerDetails.image_url} alt="beer image" />
                    <h1>{beerDetails.name}</h1>
                    <h2>{beerDetails.tagline}</h2>
                    <h4>first brewed: {beerDetails.first_brewed}</h4>
                    <p>{beerDetails.attenuation_level}</p>
                    <p>{beerDetails.description}</p>
                    <p>{beerDetails.contributed_by}</p>
                </section>
            </div>
        );
    };

    return <>{beerDetails ? renderDetails() : <h1>still loading</h1>}</>;
}

export default SingleBeer;
