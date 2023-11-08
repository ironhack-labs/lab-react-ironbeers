import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeersPage() {

    const [random, setRandom] = useState();
    useEffect(()=>{
        axios.get(`${API_URL}/random`).then((response)=>{
            const randomBeer = response.data;
            setRandom(randomBeer);
        })
    }, [])
    return(
        <div className="random">
            {random && (
                <div>
                    <div><img src={random.image_url}/></div>
                    <div className="random-name">
                        <div><p>{random.name} </p></div>
                        <div><p> {random.attenuation_level}</p></div>
                    </div>
                    <div>
                    <p>{random.tagline}</p>
                    <p>{random.first_brewed}</p>
                    <p>{random.description}</p>
                    <p>{random.contributed_by}</p>
                    </div>
                </div>
            )}
            <Link to="/" className="back-button"> Back </Link>
        </div>
    )
}

export default RandomBeersPage;
