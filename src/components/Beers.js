import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Header from "./Header";

function Beers() {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers`)
      .then((response) => {
        console.log(response.data);
        setBeersList(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1>Our range of beers:</h1>

      {beersList.map((element) => {
        return (
          <div key={element._id} className="beer-listing">
            <p>
              <p>
                <img src={element.image} alt={element.image} />
              </p>
              <h3>{element.name}</h3>
              {element.tagline} <br />
              <p>{element.description}</p>
              <p>{element.attenuation_level}</p>
              <p>{element.first_brewed}</p>
              <p>{element.contributed_by}</p>
              <p>
                {" "}
                <Link to={`/beers/${element._id}`}>More details</Link>
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
