import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Card } from "react-bootstrap";

export function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/random")
      .then((response) => {
        setRandomBeer(response.data)
      })
      .catch((error) => {
        console.log("Error getting the random beer from the API: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-5 d-flex justify-content-center">
        <Card className="p-5 w-50">
          <img src={randomBeer.image_url} className="mt-5 d-block mx-auto" style={{height: "300px", width: "100px"}}/>
            <h1>{randomBeer.name}</h1>
            <h2 style={{color: "gray"}}>{randomBeer.tagline}</h2>
              <p>{randomBeer.description}</p>
            <p><b>First Brewed: </b>{randomBeer.first_brewed}</p>
            <p><b>Attenuation Level: </b>{randomBeer.attenuation_level}</p>
            <h5 style={{color: "gray"}}>Created By: {randomBeer.contributed_by}</h5>
            </Card>
      </div>

    </div>
  );
}
