import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

function Beers() {
  async function getBeers() {
    const { data } = await api.get("/");
    setBeers(data);
  }
  const [beers, setBeers] = React.useState([]);
  console.log(beers);
  React.useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      <header>
        <Link to="/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/universal-7/614/20_-_Home-512.png"
            alt="to Homescreen"
          />
        </Link>
      </header>
      <h1>Beers</h1>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <h2>{beer.name}</h2>
            <Link to={`/beers/${beer._id}`}>
            <img
                src={beer.image_url}
                alt={beer.name}
                style={{ width: "100px" }}
            />
            </Link>

            <p>{beer.tagline}</p>
            <p>by</p>
            <h4>{beer.contributed_by}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
