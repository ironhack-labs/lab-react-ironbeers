import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeer(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching API data (beer details): ", error);
      });
  }, []);

  return (
    <div className="BeerDetailsPage">
      <div className="BeerDetailsImg">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="BeerDetailsInfo">
        <div className="BeerDetailsInfo-Header">
          <div className="BeerDetailsInfo-Header-Left">
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
          </div>
          <div className="BeerDetailsInfo-Header-Right">
            <h2>{beer.attenuation_level}</h2>
            <p><b>{beer.first_brewed}</b></p>
          </div>
        </div>
        <div className="BeerDetailsInfo-Body">
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
