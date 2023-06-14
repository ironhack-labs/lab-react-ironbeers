import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default function BeerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(API_URL);
      setBeers(res.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const renderBeers = () => {
    return beers.map((beer) => (
      <>
        <p>Loaded</p>
      </>
    ));
  };

  console.log(beers);

  if (isLoading) {
    return <p>Loading</p>;
  } else {
    return <>{beers.length ? renderBeers() : <p>No hay cerves, sólo vermuth</p>}</>;
  }
}
