import { NavLink } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";

function RandomBeer() {

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then( response => {
                
                setDetails(response.data);
                console.log(response.data)
            })
            .catch( e => console.log("error getting random beer from API", e));
    }, []);


    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink> <br />
        </header>
        <br />
        <br />

        <div key={details._id}>
          <img src={details.image_url} alt={details.title} />
          <h1>{details.name} </h1>
          <h3>{details.tagline}</h3> <br />
          <p>{details.first_brewed}</p>
          <p>{details.attenuation_level}</p>
          <p>{details.description}</p> <br />
          <p>{details.contributed_by}</p>
        </div>
      </>
    );
}

export default RandomBeer;