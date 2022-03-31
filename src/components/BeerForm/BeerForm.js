import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function BeerForm() {
  const [inputs, setInputs] = useState([]);
  const [done, setDone] = useState(false);

  function handleInputChange(e) {
    const newInputs = { ...inputs };
    newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
  }

  function enviarDatos(e) {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", inputs)
      .then((response) => {
        console.log(response.data);
        setDone(true);
        setTimeout(() => setDone(false), 3000);
        setInputs({});
        toast("added Beer");
      })
      .catch((error) => console.log(error));

    //toast("New Food added")
  }

  useEffect(() => console.log(inputs, [inputs]));

  return (
    <>
      <div className="BeerForm">
        <form onSubmit={enviarDatos}>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              class="form-control"
              onChange={handleInputChange}
              type="text"
              name="name"
              value={inputs.name}
            />
          </div>
          <div class="form-group">
            <label for="Tagline">Tagline</label>
            <input
              class="form-control"
              onChange={handleInputChange}
              type="text"
              name="tagline"
              value={inputs.tagline}
            />
          </div>
          <div class="form-group">
            <label for="description">Descripton</label>
            <input
              class="form-control"
              onChange={handleInputChange}
              type="text"
              name="description"
              value={inputs.description}
            />
          </div>
          <div class="form-group">
            <label for="firstbrewed">First Brewed</label>
            <input
              type="text"
              class="form-control"
              onChange={handleInputChange}
              name="first_brewed "
              value={inputs.first_brewed}
            />
          </div>
          <div class="form-group">
            <label for="brewertips">Brewer tips</label>
            <input
              type="text"
              class="form-control"
              onChange={handleInputChange}
              name="brewers_tips"
              value={inputs.brewers_tips}
            />
          </div>
          <div class="form-group">
            <label for="attenuation_level">Attenuation level</label>
            <input
              class="form-control"
              onChange={handleInputChange}
              type="number"
              name="attenuation_level"
              value={inputs.attenuation_level}
            />
          </div>
          <div class="form-group">
            <label for="contributed_by">contributed by</label>
            <input
              type="text"
              class="form-control"
              onChange={handleInputChange}
              name="contributed_by"
              value={inputs.contributed_by}
            />
          </div>

          <button type="submit" class="mt-3 btn btn-primary">
            Add Beer
          </button>

          {done && (
            <p>
              <Toaster />
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default BeerForm;
