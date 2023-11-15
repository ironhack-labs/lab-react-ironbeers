import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong with the list of beers :(");
        console.log(error);
      });
  }, []);

  return (
    <div className="BeersList">
      {beers.map((beersList) => {
        return (
          <div key={beersList._id}>
            <Link to={`/beers/${beersList._id}`}>
            <div className="TextList">
              <img src={beersList.image_url} width="50px" height="auto"/>
              <div>
                <h2>{beersList.name}</h2>
                <h3>{beersList.tagline}</h3>
                <p>Created by: {beersList.contributed_by}</p>
              </div>
            </div>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
