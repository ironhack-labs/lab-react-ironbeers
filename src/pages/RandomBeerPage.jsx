import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BeerDetailsPage from "./BeerDetailsPage";

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeersPage() {

    const [beer, setBeer] = useState([]);

    useEffect(() => {
        axios.get(`${beersAPI}/random`).then((res) => {
          setBeer(res.data);
          console.log(res.data);
        });
      }, []);

    return (
        <div className="beer-details-page">
          {beer && (
            <div>
              <img src={beer.image_url} alt={beer.name} />
              <h4>{beer.name}</h4>
              <span>{beer.attenuation_level}</span>
              <p>{beer.tagline}</p>
              <span>{beer.first_brewed}</span>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
          )}
        </div>



       )
}


export default RandomBeersPage;
