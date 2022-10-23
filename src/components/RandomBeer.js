import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";

function RandomBeer(){
    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then( response => {
            console.log(response.data);
            setDetails(response.data);
          })
          .catch(e => console.log("error getting characters from API", e));
      }, []);

    return(
        <div>
            <Header/>
            <br/>
        <img className="beer-image" src={details.image_url} alt="" />
                <h1>{details.name}</h1>
                <h3>{details.tagline}</h3>
                <p>{details.first_brewed}</p>
                <h2>{details.attenuation_level}</h2>
                <p>{details.description}</p>
                <p>{details.contributed_by}</p>
        </div>
    )
}

export default RandomBeer