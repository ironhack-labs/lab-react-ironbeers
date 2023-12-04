import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { Button } from "react-bootstrap";


function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState({});
  const [error, SetError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data);
        setBeerDetails(response.data);
      })
      .catch((err) => SetError(err))
      .finally(() => setLoading(false));
  }, [beerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading beer details.</div>;
  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}} >
    <div className="row d-flex flex-row align-items-center">
    <div className="col">
      <img src={beerDetails["image_url"]} style={{width: "300px", height: "600px", objectFit: "contain"}}  />
    </div>
          <div className="col">
        <h1 className="mb-3" style={{ marginTop: "3rem", fontSize:"90px"}}>{beerDetails.name} </h1>
        <h2 className="mb-5">{beerDetails.tagline}</h2>
        <h5 className="mb-4">{beerDetails.first_brewed} <span className="">first brewed</span></h5>
        <p style={{ marginTop: "3rem", fontSize:"22px"}}>{beerDetails.description}</p>
        <Button variant="primary" className="w-50 mx-auto mt-5">
            <Link to="/beers" className="ava-links">
              Back to all beers
            </Link>
          </Button>
      </div>
    </div>
    </div>
  );
}

export default BeerDetailsPage;
