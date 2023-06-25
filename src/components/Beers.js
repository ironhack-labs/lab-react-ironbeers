import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

function Beers() {
  const [beersList, setBeersList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers`)
      .then((response) => {
        console.log(response.data);
        setBeersList(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/search?q=${query}`)

      .then((response) => {
        console.log(response.data);
        setBeersList(response.data);
      })
      .catch((e) => console.log(e));
  }, [query]);

  return (
    <div>
      <Header />
      <h1>Our range of beers:</h1>

      <input
        value={query}
        type="search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      {beersList.map((element) => {
        return (
          <div key={element._id} className="beer-listing">
            <p>
              <img id="images" src={element.image_url} alt={element.image} />
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
            <br></br>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
