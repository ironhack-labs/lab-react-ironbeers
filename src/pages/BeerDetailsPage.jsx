import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const beerAPI = "https://ih-beers-api2.herokuapp.com/beers/"

function BeerDetailsPage(props) {
    const [beerDetails, setBeerDetails] = useState([])
    const [fetching, setFetching] = useState(true);

    let { beerId } = useParams();
    let beerDetailsApi = beerAPI + beerId

    useEffect(() => {
        axios.get(beerDetailsApi)
            .then((response) => {
                setBeerDetails(response.data)
                setFetching(false)
            })
            .catch((error) => console.log(error))
    }, [beerId])

    return (
        <div>
            {fetching ? <p>Loading ...</p> :
                <ul>
                    <li><img src={beerDetails.image_url} alt="Beer Image" /></li>
                    <li>{beerDetails.name}</li>
                    <li>{beerDetails.tagline}</li>
                    <li>{beerDetails.first_brewed}</li>
                    <li>{beerDetails.attenuation_level}</li>
                    <li>{beerDetails.description}</li>
                    <li>{beerDetails.contributed_by}</li>
                </ul>
            }
        </div>

    )
}

export default BeerDetailsPage;
