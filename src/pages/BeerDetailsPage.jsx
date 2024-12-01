import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
  // Estado para almacenar los detalles de la cerveza
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para mostrar el cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  // Obtener el beerId desde la URL
  const { beerId } = useParams();

  // React Router hook para navegación (botón de "Back")
  const navigate = useNavigate();

  // Usar useEffect para hacer la solicitud GET cuando el componente se monte
  useEffect(() => {
    // Realizar la solicitud GET para obtener los detalles de la cerveza
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        // Guardar los detalles de la cerveza en el estado
        setBeer(response.data);
        setLoading(false); // Cambiar el estado de carga a false una vez obtenidos los datos
      })
      .catch((error) => {
        // Manejar errores
        setError("Error fetching beer details.");
        setLoading(false);
      });
  }, [beerId]); // El efecto se vuelve a ejecutar si cambia el beerId

  // Mostrar un mensaje de carga mientras los datos se obtienen
  if (loading) {
    return <div>Loading...</div>;
  }

  // Si ocurre un error, mostrar el mensaje de error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1); // Navegar hacia atrás
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
