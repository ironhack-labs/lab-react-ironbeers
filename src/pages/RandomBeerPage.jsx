import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";


function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState("");

    const [random] = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}/beers/${random}`).then
        ((response)=>{
            const oneBeer = response.data;
            setRandomBeer(oneBeer);
        })
        .catch((error)=>console.log(error));
    }, [])


    return(
        <div>
            {randomBeer &&(
                <div>
                    <img src={randomBeer.image_url}/>
                    <p>{randomBeer.name}</p>
                    <p>{randomBeer.tagline}</p>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </div>
            )}
        </div>
    )
    
}

export default RandomBeersPage;
