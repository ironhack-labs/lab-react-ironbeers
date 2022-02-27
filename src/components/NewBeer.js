import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {
  const [inputs, setInputs] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleInput = (event) => {
    const newInputs = { ...inputs };
    newInputs[event.target.name] = event.target.value;
    setInputs(newInputs);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", inputs)
      .then((result) => {
        setInputs({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
        navigate("/beers");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1></h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label> <br />
          <input
            type="text"
            name="name"
            onChange={handleInput}
            value={inputs.name}
          />
        </div>
        <div>
          <label>Tagline</label> <br />
          <input
            type="text"
            name="tagline"
            onChange={handleInput}
            value={inputs.tagline}
          />
        </div>

        <div>
          <label>Description</label> <br />
          <input
            type="text"
            name="description"
            onChange={handleInput}
            value={inputs.description}
          />
        </div>

        <div>
          <label>First Brewed</label> <br />
          <input
            type="text"
            name="first_brewed"
            onChange={handleInput}
            value={inputs.first_brewed}
          />
        </div>

        <div>
          <label>Brewer Tips</label> <br />
          <input
            type="text"
            name="brewers_tips"
            onChange={handleInput}
            value={inputs.brewers_tips}
          />
        </div>

        <div>
          <label>Attenuation level</label> <br />
          <input
            type="number"
            name="attenuation_level"
            onChange={handleInput}
            value={inputs.attenuation_level}
          />
        </div>

        <div>
          <label>Contributed by</label> <br />
          <input
            type="text"
            name="contributed_by"
            onChange={handleInput}
            value={inputs.contributed_by}
          />
        </div>

        <button type="submit">Add new</button>
      </form>
    </div>
  );
}
