import { Header } from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// const baseBeer = 'https://ih-beers-api2.herokuapp.com/beers'

export function Beers() {
  const [beer, setBeer] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBeers = async () => {
    try {
      const {data} = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeer(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);
  console.log(beer);

  return !beer ? (
    <div>Carregando Informações...</div>
  ) : (
    <div>
      <Header />

      <h2>All Beers</h2>

      {beer.map((beer) => {
        return (
          <div key={beer._id} className="myCard">
            <div className="info beerImage">
              <img className="beerImage" src={beer.image_url} alt={beer.name} />
            </div>
            <div className="info beerDescription">

              <Link to={`/beer/${beer._id}`}>
              <h1>{beer.name}</h1>
              </Link>
              <Link to={`/beer/${beer._id}`}>
              <h4>{beer.tagline}</h4>
              </Link>
              <Link to={`/beer/${beer._id}`}>
              <h6>Created by: {beer.contributed_by}</h6>
              </Link>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );




}
