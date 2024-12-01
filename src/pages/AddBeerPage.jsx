import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir al usuario

function AddBeerPage() {
  // State variables to store the values of the form inputs. You can leave these as they are.
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  // Hook para redirigir al usuario después de agregar la cerveza
  const navigate = useNavigate();

  // Handler functions for the form inputs. You can leave these as they are.
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImageUrl = (e) => setImageUrl(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  // Función para manejar la sumisión del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creamos el objeto con los datos del formulario
    const newBeer = {
      name,
      tagline,
      description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel), // Aseguramos que sea un número
      contributed_by,
    };

    try {
      // Realizamos la solicitud POST a la API
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
      
      // Si la cerveza se crea correctamente, redirigimos al usuario a la página de listado de cervezas
      navigate("/beers");
    } catch (error) {
      // Si hay un error, lo mostramos en consola
      console.error("Error al crear la cerveza:", error);
    }
  };

  // Estructura y contenido de la página para agregar una nueva cerveza
  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <form onSubmit={handleSubmit}> {/* Llamamos a handleSubmit en el evento onSubmit */}
        <label>Name</label>
        <input
          className="form-control mb-4"
          type="text"
          name="name"
          placeholder="Beer Name"
          value={name}
          onChange={handleName}
        />
        <label>Tagline</label>
        <input
          className="form-control mb-4"
          type="text"
          name="tagline"
          placeholder="Beer Tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label className="form-label">Description</label>
        <textarea
          className="form-control mb-4"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label>Image</label>
        <input
          className="form-control mb-4"
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImageUrl}
        />

        <label>First Brewed</label>
        <input
          className="form-control mb-4"
          type="text"
          name="firstBrewed"
          placeholder="Date - MM/YYYY"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label>Brewer Tips</label>
        <input
          className="form-control mb-4"
          type="text"
          name="brewersTips"
          placeholder="..."
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <label>Attenuation Level</label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              %
            </span>
          </div>
          <input
            className="form-control mb-4"
            type="number"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
            min={0}
            max={100}
          />
        </div>

        <label>Contributed By</label>
        <input
          className="form-control mb-4"
          type="text"
          name="contributedBy"
          placeholder="Contributed by"
          value={contributedBy}
          onChange={handleContributedBy}
        />
        <button type="submit" className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
