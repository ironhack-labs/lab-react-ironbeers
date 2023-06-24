import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function BeerDetails() {
  const { id } = useParams();

  const [BeerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/${id}`)
      .then((response) => {
        console.log(response.data);
        setBeerDetails(response.data);
      })
      .catch((e) => console.log("Error getting details from the API", e));
  }, []);

  return (
    <>
      <Header />
      {BeerDetails ? (
        <div>
          <div>
            {BeerDetails.image_url && (
              <img src={BeerDetails.image_url} alt={BeerDetails.name} />
            )}
          </div>
          <div>
            <h1>{BeerDetails.name}</h1>
            <h2>{BeerDetails.tagline}</h2>
            <h2>{BeerDetails.first_brewed}</h2>
            <h2>{BeerDetails.attenuation_level}</h2>
            <p>{BeerDetails.description}</p>
            <p>Created by: {BeerDetails.contributed_by}</p>
            <Link to={`/beers`}>Back</Link>
            <hr />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default BeerDetails;
