import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export function Beers() {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        console.log("Response from the API: ", response.data);
        setBeersList(response.data);
      })
      .catch((error) => {
        console.log("Error getting the data from the API: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      {beersList.map((beer) => {
        return (
          <div className="card flex-row">
            <img
              className="card-img-left example-card-img-responsive"
              src={beer.image_url}
              style={{ width: "80px", height: "180px" }}
            />
            <div className="card-body">
              <h4 className="card-title h3 h4-sm">{beer.name}</h4>
              <h5>{beer.tagline}</h5>
              <p><b>Created by: </b>{beer.contributed_by}</p>
              <Link to={"/beers/" + beer._id}>More Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
