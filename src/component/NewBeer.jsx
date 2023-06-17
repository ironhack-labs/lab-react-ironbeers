import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        data
      );
      navigate("/beers");
    } catch (error) {
      //console.log(error);
    }
  };

  const handleChange = e => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      
      <h1>Create New Beer</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </label> <br></br>
          <label>
            Tagline
            <input
              type="text"
              name="tagline"
              value={data.tagline}
              onChange={handleChange}
            />
          </label> <br></br>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </label> <br></br>
          <label>
            First Brewed
            <input
              type="text"
              name="first_brewed"
              value={data.first_brewed}
              onChange={handleChange}
            />
          </label> <br></br>
          <label>
            Brewer Tips
            <input
              type="text"
              name="brewers_tips"
              value={data.brewers_tips}
              onChange={handleChange}
            />
          </label> <br></br>
          <label>
            Attenuation Level
            <input
              type="number"
              name="attenuation_level"
              value={data.attenuation_level}
              onChange={handleChange}
            />
          </label> <br></br>
          <label>
            Contributed By
            <input
              type="text"
              name="contributed_by"
              value={data.contributed_by}
              onChange={handleChange}
            />
          </label><br></br>
          <button type="submit">Create New Beer</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
