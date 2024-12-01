import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Importa axios
import Search from "../components/Search";

function AllBeersPage() {
  // Inicializar el estado para las cervezas
  const [beers, setBeers] = useState([]);

  // Usar useEffect para hacer la solicitud a la API
  useEffect(() => {
    // Hacer la solicitud GET a la API de cervezas
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        // Actualizar el estado con los datos de la API
        setBeers(response.data);
      })
      .catch((error) => {
        // Manejar errores en la solicitud
        console.error("Error fetching beers:", error);
      });
  }, []); // El array vacío asegura que solo se haga una vez al montar el componente

  return (
    <>
      <Search />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
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
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;
