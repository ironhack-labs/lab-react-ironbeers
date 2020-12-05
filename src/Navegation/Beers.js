import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers(props) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function getBeers() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com${props.match.path}`
        );
        setBeers(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getBeers();
  }, [props]);

  return (
    <>
      {beers.map((el) => (
        <Link
          to={`/beers/${el._id}`}
          className="beerCard"
          key={el._id}
          test={el}
        >
          <div className="df-jc-ac imgSquare">
            <img src={el.image_url} alt="Beer" />
          </div>
          <div className="beerinformation">
            <h3>{el.name}</h3>
            <h4>{el.tagline}</h4>
            <h6>{el.contributed_by}</h6>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Beers;
