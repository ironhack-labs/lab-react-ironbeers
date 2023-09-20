import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState();
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((result) => {
        navigate(`/beers`);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="First brewed"
          value={first_brewed}
          onChange={(e) => setFirst_brewed(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brewers tips"
          value={brewers_tips}
          onChange={(e) => setBrewers_tips(e.target.value)}
        />
        <input
          type="number"
          placeholder="Attenuation level"
          value={attenuation_level}
          onChange={(e) => setAttenuation_level(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contributed by"
          value={contributed_by}
          onChange={(e) => setContributed_by(e.target.value)}
        />
        <button>Create Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
