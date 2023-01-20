import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Card } from "react-bootstrap";

export function SingleBeer() {
  const { beerId } = useParams();

  const [beerDetails, setBeerDetails] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/" + beerId)
      .then((response) => {
        setBeerDetails(response.data);
      })
      .catch((error) => {
        console.log("Error getting the data from the API: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-5 d-flex justify-content-center">
        <Card className="p-5 w-50">
          <img src={beerDetails.image_url} className="mt-5 d-block mx-auto" style={{height: "300px", width: "100px"}}/>
            <h1>{beerDetails.name}</h1>
            <h2 style={{color: "gray"}}>{beerDetails.tagline}</h2>
              <p>{beerDetails.description}</p>
            <p><b>First Brewed: </b>{beerDetails.first_brewed}</p>
            <p><b>Attenuation Level: </b>{beerDetails.attenuation_level}</p>
            <h5 style={{color: "gray"}}>Created By: {beerDetails.contributed_by}</h5>
            </Card>
      </div>

    </div>
  );
}
