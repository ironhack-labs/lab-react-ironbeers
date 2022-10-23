import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeersList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      {beersList.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} width={50} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Created By: {beer.contributed_by}</p>
            <Link to={`/beer/${beer._id}`}>View {beer.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
