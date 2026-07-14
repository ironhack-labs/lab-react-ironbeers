import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get(
          "https://beers-api.edu.ironhack.com/beers"
        );

        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBeers();
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
                        beer.image_url
                          ? beer.image_url
                          : "https://static.thenounproject.com/png/4974686-200.png"
                      }
                      style={{
                        height: "6rem",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                      alt={beer.name}
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