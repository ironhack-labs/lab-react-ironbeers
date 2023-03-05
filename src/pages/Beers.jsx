import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

import axios from "axios";
import { ClipLoader } from "react-spinners";

function Beers() {
  const [allBeers, setAllBeers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(response.data);
      console.log(response.data);
      setIsFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (isFetching === true) {
    return (
      <div>
        <ClipLoader />
      </div>
    );
  }

  return (
    <div>
      <Header />
      {allBeers.map((eachBeer) => {
        const { image_url, name, tagline, contributed_by, _id } = eachBeer;
        return (
          <div id="beers-container">
            <img src={image_url} alt={name} />
            <div id="beers-details">
              <Link to={`/beers/${_id}`}>
                <h3>{name}</h3>
              </Link>
              <p class="tagline">{tagline}</p>
              <p>
                <b>Created by: </b>
                {contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
