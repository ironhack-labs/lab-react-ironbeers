import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState("");

    useEffect(() => {
        axios.get(baseUrl + "/random")
            .then(response => {
                setRandomBeer(response.data)
            })
            .catch(e => console.log("Error getting data from API: ", e));
    }, [])

    return (
        <div className="SingleBeer">
            <Link to="/">HOME</Link>

            {
                randomBeer ?
                <section>
                    <img src={randomBeer.image_url} alt={randomBeer.name} />
                    <div>
                        <h2>Name:<br />{randomBeer.name}</h2>
                        <h3>{randomBeer.tagline}</h3>
                        <p>First brewed:<br />{randomBeer.first_brewed}</p>
                        <p>Attenuation level:<br />{randomBeer.attenuation_level}</p>
                        <p>Description:<br />{randomBeer.description}</p>
                        <p>Contributor:<br />{randomBeer.contributed_by}</p>
                    </div>
                </section>
                : <p>Loading...</p>
            }
        </div>
    )
}