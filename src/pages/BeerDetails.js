import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

function BeerDetails() {
  const { beerId } = useParams();

  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + "/" + beerId)
      .then((response) => {
        console.log(response);
        setBeerDetails(response.data);
      })
      .catch((e) => {
        console.log("error loading bears from API...", e);
      });
  }, [beerId]);

  return (
    <>
    <div><Header /></div>
      {beerDetails ? (
       <div  className="col-12">
        <div className="row">
        
          <div className="col-md-4">
            <img
              src={beerDetails.image_url}
              alt="beer-img"
              className="one-beer-image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body card-details">
              <h3 className="font-weight-bold text-left">{beerDetails.name}</h3>
              <p className="text-body-tertiary">{beerDetails.tagline}</p>
              <p className="fw-light">First brewed: {beerDetails.first_brewed}</p>
              <p className="fw-lighter">Attenuation level: {beerDetails.attenuation_level}</p>
              <p className="card-text">{beerDetails.description}</p>
              <p className="fw-semibold">Created by: {beerDetails.contributed_by}</p>
            </div>
          </div>
          
        </div>
        </div>
      ) : (
        "loading...."
      )}
    </>
  );
}

export default BeerDetails;
