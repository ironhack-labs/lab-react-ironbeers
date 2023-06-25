import Header from "./Header";
import { useEffect, useState } from "react";
import "./BeerList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SingleBeerDetails from "./SingleBeerDetails";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeersFromApi();
  }, []);

  const getBeersFromApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log("error getting list of beer from Heroku API"));
  };

  const renderListOfBeers = () => {
    if (beers === null) {
      return <p>loading your beer...</p>;
    } else {
      return (
        <div className="BeerList">
          <Header />
          <h1>List of Our Beers</h1>
          {beers.map((elem) => (
            <div key={elem._id} className="beer-summary">
              <h3>{elem.name}</h3>
              <img src={elem.image_url} alt={elem.name} />
              <p>{elem.tagline}</p>
              <p>Created by: {elem.contributed_by}</p>
              <Link to={`/beers/${elem._id}`}>More details</Link>
            </div>
          ))}
        </div>
      );
    }
  };

  return renderListOfBeers();
}

export default BeerList;
