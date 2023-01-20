import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Beers = () => {
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers/";

  const [beersArr, setBeersArr] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setBeersArr(response.data);
        console.log(beersArr);
        console.log(response.data);
      })
      .catch((e) => {
        console.log("error getting beers from api...", e);
      });
  }, []);

  return (
    <div>
      <div class="beersPage">
        <Header />
        {beersArr === null
          ? "loading....."
          : beersArr.map((beer) => {
              return (
                <div key={beer._id} class="beerCard">
                  <img class="beerImg" src={beer.image_url} alt="beer" />
                  <h3>{beer.name}</h3>
                  <h5>{beer.tagline}</h5>
                  <p>Contributed by: {beer.contributed_by}</p>
                  <Link to={"/beers/" + beer._id}>Details</Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Beers;