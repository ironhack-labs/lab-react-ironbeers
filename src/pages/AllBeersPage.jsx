import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://ih-beers-api2.herokuapp.com";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = () => {
    axios
      .get(API_URL + "/beers")
      .then((response) => {
        setBeers(response.data);
        console.log(beers);
      })
      .catch((error) => {
        console.log("Error getting beers from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <>
      <div>
        {beers.map((cerveza, k) => {
          return (
            <div>
              <Link to={`/beers/${cerveza._id}`}>
                <h1>{cerveza.name} </h1>
              </Link>
              <br />

              <img src={cerveza.image_url} />
              <br />

              <p>{cerveza.contributed_by}</p>
              <br />
              <h3>{cerveza.tagline}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;
