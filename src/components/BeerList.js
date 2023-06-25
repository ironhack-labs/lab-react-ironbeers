import Header from "./Header";
import { useEffect, useState } from "react";
import "./BeerList.css";
import axios from "axios";
import { Link } from "react-router-dom";

function BeerList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => console.log("error getting list of beer from Heroku API"));
  }, []);

  return (
    <section className="BeerList">
      <Header />
      <h1>List of Our Beer</h1>
      {beers.map((elem) => {
        return (
          <div key={elem._id} className="beer-summary">
            <h3>{elem.name}</h3>
            <img src={elem.image_url} alt={elem.name} />
            <p>{elem.tagline}</p>
            <p>Created by: {elem.contributed_by}</p>
            <Link to={`/beers/$(elem._id}`}>More details</Link>
          </div>
        );
      })}{" "}
    </section>
  );
}

export default BeerList;
