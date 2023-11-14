import { useEffect, useState } from "react";
import axios from "axios";


const randomBeerAPI = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeersPage(props) {

    const [randomBeer, setRandomBeer] = useState()
    const [fetching, setFetching] = useState(true);

    let randomBeerId = "";

    useEffect(() => {
        axios.get(randomBeerAPI)
            .then((response) => {
                setRandomBeer(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [])




    return (
        <div>

            {fetching ? <p>Loading ...</p> :
                <ul>
                    <li><img src={randomBeer.image_url} alt="Beer Image" /></li>
                    <li>{randomBeer.name}</li>
                    <li>{randomBeer.tagline}</li>
                    <li>{randomBeer.first_brewed}</li>
                    <li>{randomBeer.attenuation_level}</li>
                    <li>{randomBeer.description}</li>
                    <li>{randomBeer.contributed_by}</li>
                </ul>
            }

        </div >
    )
}

export default RandomBeersPage;
