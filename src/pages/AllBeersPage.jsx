import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  // State variable to store the list of beers
  const [beers, setBeers] = useState([]);

  // Iteration 1
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data); // Update state with the fetched beers
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  // Render the list of beers
  return (
    <>
      <div>
        <h2>All Beers</h2>
        <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
          {beers.map((beer) => (
            <div
              key={beer._id}
              className="card m-2 p-2 text-center"
              style={{ width: "24rem", height: "18rem" }}
            >
              <div className="card-body">
                <Link to={`/beers/${beer._id}`}>
                  <img
                    src={beer.image_url}
                    style={{ height: "6rem" }}
                    alt={"image of " + beer.name}
                  />
                  <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    <em>{beer.tagline}</em>
                  </h6>
                  <p className="card-text">Created by: {beer.contributed_by}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllBeersPage;
