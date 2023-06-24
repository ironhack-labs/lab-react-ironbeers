import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleOnchange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/new`, inputs)
      .then((message) => {
        console.log(message);
        navigate("/beers");
      })
      .catch((e) => console.log("Error creating new beer in the API", e));
  };
  return (
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            placeholder="Enter beer name"
            required={true}
            onChange={handleOnchange}
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            value={inputs.tagline || ""}
            placeholder="Enter tagline"
            required={true}
            onChange={handleOnchange}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            placeholder="Enter description"
            onChange={handleOnchange}
          />
        </label>

        <label>
          First Brewed
          <input
            type="text"
            name="first_brewed"
            value={inputs.first_brewed || ""}
            placeholder="Enter date"
            onChange={handleOnchange}
          />
        </label>

        <label>
          Brewers Tips
          <input
            type="text"
            name="brewers_tips"
            value={inputs.brewers_tips || ""}
            placeholder="Enter tips"
            onChange={handleOnchange}
          />
        </label>

        <label>
          Attenuation Level
          <input
            type="number"
            min={10}
            name="attenuation_level"
            value={inputs.attenuation_level || ""}
            placeholder="10"
            onChange={handleOnchange}
          />
        </label>

        <label>
          Contributed By
          <input
            type="text"
            name="contributed_by"
            value={inputs.contributed_by || ""}
            placeholder="Enter contributor"
            onChange={handleOnchange}
          />
        </label>

        <button>Create</button>
      </form>
    </>
  );
}

export default NewBeer;
