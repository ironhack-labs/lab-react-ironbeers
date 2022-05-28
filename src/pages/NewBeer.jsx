import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
  const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
  const handleContributed_by = (e) => setContributed_by(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setDescription("");
        setTagline("");
        setFirst_brewed("");
        setAttenuation_level(0);
        setContributed_by("");
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddProject">
      <Navbar />
      <h3>Add Beer</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescription}
        ></textarea>

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirst_brewed}
        />

        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributed_by}
        />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuation_level}
        />

        <button type="submit">Add</button>
      </form>

      <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </div>
  );
}

export default NewBeer;
