import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

const ListBeers = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        console.log(response.data);
        setBeers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <ul className="beer-list">
        {beers?.map(({ _id, image_url, name, tagline, contributed_by }) => {
          return (
            <li key={_id}>
              <Link to={`/beer/${_id}`} className="Link">
                <img src={image_url} alt={name} />
                <div>
                  <h2>{name}</h2>
                  <p>{tagline}</p>
                  <p>
                    <strong>Created by:</strong>
                    {contributed_by}
                  </p>
                </div>
              </Link>
            </li>
          );
        }) || <h3>Loading Beers</h3>}
      </ul>
    </div>
  );
};

export default ListBeers;
