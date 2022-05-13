import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <div className="AllBeers">
      <Header />
      <h1>All The Beers</h1>
      <br /> <br /> <br />
      {beers.map((elm) => {
        return (
          <div key={elm._id}>
            <img
              src={elm.image_url}
              alt={elm.name}
              style={{ height: "100px" }}
            />
            <h3>{elm.name}</h3>
            <p>{elm.tagline}</p>
            <p>{elm.contributed_by}</p>
            <NavLink to={`/beers/${elm._id}`}>More Details</NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
