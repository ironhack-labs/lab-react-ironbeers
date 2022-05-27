import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handlebrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        props.refreshBeers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
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

        <label htmlFor="first_brewed">First brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handlebrewersTips}
        />

        <label htmlFor="attenuation_level ">Attenuation level</label>
        <input
          type="number"
          name="attenuation_level "
          value={attenuation_level}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributed_by">contributed by</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributedBy}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
