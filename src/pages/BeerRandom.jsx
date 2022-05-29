import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BeerRandom() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
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
      <Navbar />
      {beers && (
        <>
          <img className="img2" src={beers.image_url} alt="" />
          <h3>{beers.name}</h3>
          <h3>{beers.tagline}</h3>
          <h3>{beers.first_brewed}</h3>
          <h3>{beers.attenuation_level}</h3>
          <h3>{beers.description}</h3>

          <h3>{beers.contributed_by}</h3>
        </>
      )}

      {/* {beers &&
        beers.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))} */}
      {/* 
      {beers && (
        <Link to={`/beers/edit/${beers._id}`}>
          <button>Edit beers</button>
        </Link>
      )} */}
    </div>
  );
}

export default BeerRandom;
