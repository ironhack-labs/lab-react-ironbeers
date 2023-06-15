import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiHomebrew } from "react-icons/si";
import axios from "axios";

function NewBeer() {
  const navigate = useNavigate();

  const [newBeer, setNewBeer] = useState({
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
      const { data } = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    setNewBeer({ ...newBeer, [name]: value });
  };

  return (
    <div>
      <header>
        <Link to={"/"}>
          <SiHomebrew className="home-icon" />
        </Link>
      </header>
      <h1>Create New Beer</h1>
      <div className="new-beer-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={newBeer.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Tagline
            <input
              type="text"
              name="tagline"
              value={newBeer.tagline}
              onChange={handleChange}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={newBeer.description}
              onChange={handleChange}
            />
          </label>
          <label>
            First Brewed
            <input
              type="text"
              name="first_brewed"
              value={newBeer.first_brewed}
              onChange={handleChange}
            />
          </label>
          <label>
            Brewer Tips
            <input
              type="text"
              name="brewers_tips"
              value={newBeer.brewers_tips}
              onChange={handleChange}
            />
          </label>
          <label>
            Attenuation Level
            <input
              type="number"
              name="attenuation_level"
              value={newBeer.attenuation_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Contributed By
            <input
              type="text"
              name="contributed_by"
              value={newBeer.contributed_by}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create New Beer</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
