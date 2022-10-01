import axios from "axios";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../components/BackHome";

function Beers() {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((response) => {
        setBeers(response.data);
      });
  };

  return (
    <div>
      <BackHome />
      <input
        type='text'
        placeholder='Search for a beer'
        onChange={handleChange}
      />
      {beers.map((beer) => {
        return (
          <article
            key={beer._id}
            onClick={() => {
              navigate(`/beers/${beer._id}`);
            }}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>
              <strong>Created by:</strong> {beer.contributed_by}
            </p>
          </article>
        );
      })}
    </div>
  );
}

export default Beers;
