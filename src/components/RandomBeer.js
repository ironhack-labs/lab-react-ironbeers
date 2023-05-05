import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./RandomBeer.css";
function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState();

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/")
            .then((response) => {
                const beers = response.data;
                const randomBeerIndex = Math.floor(
                    Math.random() * beers.length
                );
                const randomBeer = beers[randomBeerIndex];
                setRandomBeer(randomBeer);
                console.log(randomBeer);
            })
            .catch((err) => console.error(err));
    }, []);

    const renderDetails = () => {
        return (
            <div>
                <header>
                    <Link to="/" className="home">
                        Home
                    </Link>
                </header>

                <section>
                    <img
                        src={randomBeer.image_url}
                        alt="beer image"
                        className="beer-img"
                    />
                    <h1>{randomBeer.name}</h1>
                    <h2>{randomBeer.tagline}</h2>
                    <h4>first brewed: {randomBeer.first_brewed}</h4>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </section>
            </div>
        );
    };

    return <>{randomBeer ? renderDetails() : <h1>still loading</h1>}</>;
}

export default RandomBeer;
