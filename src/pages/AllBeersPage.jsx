import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  // Start with empty array (API se data aayega)
  const [beers, setBeers] = useState([]);

  // Fetch all beers from API
  useEffect(() => {
    axios
      .get("https://beers-api.edu.ironhack.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log("Error fetching beers:", error);
      });
  }, []);

  return (
    <>
      <Search />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Link to={"/beers/" + beer._id}>
                <div
                  className="card m-2 p-2 text-center"
                  style={{ width: "24rem", height: "18rem" }}
                >
                  <div className="card-body">
                    <img
                      src={
                        beer.image_url && beer.image_url !== ""
                          ? beer.image_url
                          : "https://via.placeholder.com/150x300?text=No+Image"
                      }
                      alt={"image of " + beer.name}
                      style={{
                        height: "120px",
                        width: "auto",
                        display: "block",
                        margin: "0 auto",
                        objectFit: "contain",
                      }}
                    />

                    <h5 className="card-title text-truncate mt-2">
                      {beer.name}
                    </h5>

                    <h6 className="card-subtitle mb-3 text-muted">
                      <em>{beer.tagline}</em>
                    </h6>

                    <p className="card-text">
                      Created by: {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllBeersPage;
