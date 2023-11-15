import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  const getAllBeers = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setAllBeers(response.data);
      })
      .catch((error) => {
        console.log("Error getting Beers from the API...");
        console.log(error);
      });
  };
  useEffect(() => {
    getAllBeers();
  }, []);
  console.log(allBeers);
  return (
    <>
      <div>
        <h2>List of Beers</h2>

        {allBeers.map((beer) => {
          console.log(beer);
          return (
            <>
              <div className="Beers" key={beer.name}>
                <Link to={`/allBeers/${beer.name}`}>
                    <h3>{beer.name}</h3>
                    <img src={beer.image_url} style={{ height: "200px" }}alt={"image of" + beer.name}
                    />
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;
