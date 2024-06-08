import { useState } from "react";
import { addBeer } from "../services/BeersServices";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  //Usamos el elmento navigate para poder navegar despues de hacer alguna peticion sin recargar la pagina
  const navigate = useNavigate();
  //La variable que va a guardar los datos del form inicia con un objeto con todos los inputs
  //con sus values en "" y 0
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });

  //con esta función de recoge los valores de los inputs en un objeto
  const handleInputChange = (event) => {
    //Todos los botones tendran un evento ohChenge escuchando para atrapar el evento 
    const { name, value } = event.target
    setNewBeer({
      //...Crea una copia del lo que tenga ese objeto
      ...newBeer,
      //con esto se le da al elemento que tenga el name el value correspondiente
      [name]: value
    })
  }

  //creamos la función para controlar el comportamiento del form
  //Le pasamos el evento
  const handleSubmit = (event) => {
    event.preventDefault();

    addBeer(newBeer)
      .then(() => navigate("/"))
      .catch(e => console.error(e))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={newBeer.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tagline" className="form-label">
          Tagline
        </label>
        <input
          type="text"
          className="form-control"
          id="tagline"
          name="tagline"
          value={newBeer.tagline}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows="3"
          value={newBeer.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="first_brewed" className="form-label">
          First Brewed
        </label>
        <input
          type="text"
          className="form-control"
          id="first_brewed"
          name="first_brewed"
          value={newBeer.first_brewed}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="brewers_tips" className="form-label">
        Brewer&rsquo;s Tips
        </label>
        <input
          type="text"
          className="form-control"
          id="brewers_tips"
          name="brewers_tips"
          value={newBeer.brewers_tips}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="attenuation_level" className="form-label">
        Attenuation Level
        </label>
        <input
          type="number"
          min={0}
          className="form-control"
          id="attenuation_level"
          name="attenuation_level"
          value={newBeer.attenuation_level}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contributed_by" className="form-label">
        Contributed By
        </label>
        <input
          type="text"
          className="form-control"
          id="contributed_by"
          name="contributed_by"
          value={newBeer.contributed_by}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
