import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from 'react-router-dom';

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      let response = await axios.get(apiURL);
      console.log(response.data);
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      <Header />


      {beers.map((beers) => {
        return (
          <div key={beers._id}>
            <img src={beers.image_url} className="beer-list-img" alt="beer" />
            <h3><Link to={`/beers/${beers._id}`}>{beers.name}</Link></h3>
            <h4>{beers.tagline}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
