import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

function BeerDetails() {
  const [findBeer, setFindBeer] = useState("");
  const { beerId } = useParams();
  // console.log(beerId);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        // console.log(response.data);
        setFindBeer(response.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <div className="BeerDetails">
      <Header />
      <h1>Beer in Details</h1>
      {!findBeer && <h3>Beer not found!</h3>}
      {findBeer && (
        <>
          <div>
            <img
              src={findBeer.image_url}
              alt={findBeer.name}
              style={{ height: "300px" }}
            />
          </div>
          <div>
            <h2>{findBeer.name}</h2>
            <h4>Tagline : {findBeer.tagline}</h4>
            <h4>Attenuation level : {findBeer.attenuation_level}</h4>
            <h4>First brewed : {findBeer.first_brewed}</h4>
            <h4>Description : {findBeer.description}</h4>
            <h4>Contributed by : {findBeer.contributed_by}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default BeerDetails;
