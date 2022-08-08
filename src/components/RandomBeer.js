import { Row } from "antd";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  
const randomBeerUrl = "https://ih-beers-api2.herokuapp.com/beers/random";

  //get random beer from API
  useEffect(() => {
    axios
      .get(randomBeerUrl)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Row>
      <Header />
     {/*  can't make this work  */}
     {/*  <BeerDetails chosenBeer={randomBeer} /> */}
      {!randomBeer && <h3>Loading...</h3>}

      {randomBeer && (
        <Row style={{ margin: 24 }}>
          <Row>
            <img
              src={randomBeer.image_url}
              alt="flag"
              style={{
                height: 200,
                padding: 12,
                marginLeft: "30%",
              }}
            />
          </Row>

          <h2 style={{ color: "black" }}>{randomBeer.name}</h2>
          <h4 style={{ color: "black" }}>
            Attenuation Level: <b>{randomBeer.attenuation_level}</b>
          </h4>

          <h6 style={{ fontWeight: 700, color: "grey", fontSize: 24 }}>
            {randomBeer.tagline}
          </h6>

          <span style={{ fontWeight: 700, color: "grey", fontSize: 24 }}>
            First Brewed: {randomBeer.first_brewed}
          </span>
          <p style={{ fontSize: "1.5rem" }}>{randomBeer.description}</p>
          <span>{randomBeer.contributed_by}</span>
        </Row>
      )}
    </Row>
  );
}

export default RandomBeer;