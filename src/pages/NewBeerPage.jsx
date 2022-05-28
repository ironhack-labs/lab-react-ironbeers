import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

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
        setFirstBrewed("");
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="new-beer-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleName} />

        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          onChange={handleTagline}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleDescription}
        ></textarea>

        <label htmlFor="first_brewed">First brewed:</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          onChange={handleFirstBrewed}
        />

        <label htmlFor="attenuationLevel">Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedBy">Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          onChange={handleContributedBy}
        />

        <button type="submit">Add new</button>
      </form>
    </section>
  );
}

export default NewBeerPage;
