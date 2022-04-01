import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import InputFormComponent from "./InputFormComponent";

const NewBeer = () => {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  function handleChange(event) {
    if (event.target.name === "attenuation_level") {
      setNewBeer({
        ...newBeer,
        [event.target.name]: Number(event.target.value),
      });
    } else {
      setNewBeer({ ...newBeer, [event.target.name]: event.target.value });
    }
  }

  function handleClick(event) {
    event.preventDefault();
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.error(err));
  }

  console.log(newBeer);
  return (
    <div>
      {" "}
      <Navbar />
      <form className="container p-4">
        <InputFormComponent
          name="name"
          displayText="Beer Name"
          handleChange={handleChange}
          state={newBeer}
        />

        <InputFormComponent
          name="tagline"
          displayText="Tagline"
          handleChange={handleChange}
          state={newBeer}
        />

        <div className="form-group mb-3">
          <label htmlFor="description" className="ms-3 mb-2">
            <strong>Description</strong>
          </label>
          <textarea
            type="text"
            className="form-control rounded"
            id="description"
            name="description"
            onChange={handleChange}
            value={newBeer.description}
            placeholder="Description"
          />
        </div>

        <InputFormComponent
          name="first_brewed"
          displayText="First Brewed"
          handleChange={handleChange}
          state={newBeer}
        />

        <InputFormComponent
          name="brewers_tips"
          displayText="Brewers Tips"
          handleChange={handleChange}
          state={newBeer}
        />

        <InputFormComponent
          name="attenuation_level"
          displayText="Attenuation Level"
          type="number"
          handleChange={handleChange}
          state={newBeer}
        />

        <InputFormComponent
          name="contributed_by"
          displayText="Contributed By"
          handleChange={handleChange}
          state={newBeer}
        />

        <button
          type="submit"
          className="btn btn-primary rounded-pill w-100"
          onClick={(event) => handleClick(event)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
