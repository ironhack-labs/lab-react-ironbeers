import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import './RandomBeer.css';

function RandomBeer() {

  const [randomBeer, setrandomBeer] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + '/random')
      .then((randomBeer) => {
        console.log(randomBeer.data)
        setrandomBeer(randomBeer.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

    return (
      <div>

      <Header />

      <div className="randomBeer" key={randomBeer._id}>
        <img src={randomBeer.image_url} alt="beer" />
      </div>
      <div>
        <h2>{randomBeer.name}</h2>
        <h4>{randomBeer.tagline}</h4>
        <h4>First brewed: {randomBeer.first_brewed}</h4>
        <h4>Attenuation level: {randomBeer.attenuation_level}</h4>
        <p>Description: {randomBeer.description}</p>
        <h4>First brewed: {randomBeer.first_brewed}</h4>
        <h4>Created by: {randomBeer.contributed_by}</h4>
      </div>
      <Link to='/beers'>Back</Link>
     
      </div>
    );
  }
  
  export default RandomBeer;