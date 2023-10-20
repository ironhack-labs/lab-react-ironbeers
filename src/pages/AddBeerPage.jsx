import React, { useState } from "react";

function AddBeerPage() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0, 
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeerData({ ...beerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(beerData),
      });

      if (response.ok) {
        alert("¡Nueva cerveza guardada correctamente en la base de datos!");
        
        setBeerData({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      } else {
        alert("Error al guardar la cerveza en la base de datos.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Agregar Nueva Cerveza</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={beerData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={beerData.tagline}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={beerData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First_brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Consejos del Cervecero</label>
          <input
            type="text"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nivel de Atenuación</label>
          <input
            type="number"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contribuido por</label>
          <input
            type="text"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Agregar Cerveza</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;