import React, { useEffect, useState } from "react";
import axios from "axios";
import { Beer } from "../components/Beer";
import { Link } from "react-router-dom";

export const BeersPage = () => {
  const [beers, setBeers] = useState([]);
  const getBeers = async () => {
    try {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getBeers();
  }, []);
  return (
    <div>
      <h1>Beers Page</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <Link to={`/beers/:${beer._id}`} key={beer._id} style={{textDecoration:'none',color:'black'}}>
              <Beer beer={beer} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
