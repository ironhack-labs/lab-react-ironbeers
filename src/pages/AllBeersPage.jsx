import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState(""); // para guardar el texto de búsqueda

  // Petición inicial al cargar la página
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

  // Petición cada vez que cambia el texto de búsqueda
  useEffect(() => {
    if (query === "") {
      // Si no hay búsqueda, mostramos todas
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener cervezas:", error);
        });
    } else {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.error("Error al buscar cervezas:", error);
        });
    }
  }, [query]);

  return (
    <>
      <h1 className="text-center my-4">Todas las Cervezas</h1>

      <Search onSearch={setQuery} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
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
                  <p className="card-text">Created by: {beer.contributed_by}</p>
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
