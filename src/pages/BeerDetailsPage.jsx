import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  // Obtener todas las cervezas al cargar la página
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener cervezas:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Todas las Cervezas</h1>
      <Search />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={"/beers/" + beer._id}>
              <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                <div className="card-body">
                  <img
                    src={beer.image_url}
                    alt={"image of " + beer.name}
                    style={{ height: "6rem" }}
                  />
                  <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
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
        ))}
      </div>
    </>
  );
}

export default AllBeersPage;
