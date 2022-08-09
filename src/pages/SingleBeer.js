import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((res) => {
      console.log("res.data", res.data);
      setBeer(res.data);
    });
  }, [id]);

  if (!beer) {
    return (
      <div>
        <Header />
        <p>Retrieving data...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="singleBeerContainer">
        <img src={beer.image_url} alt="beer" className="singleBeerImage" />
        <div className="beerInfo">
          <h2>
            <Link to={`/single-beer/${beer._id}`}>{beer.name}</Link>
          </h2>
          <h3>{beer.tagline}</h3>
          <p>{`First brewed ${beer.first_brewed}`}</p>
          <p>{`Attenuation level : ${beer.attenuation_level}`}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBeer;
