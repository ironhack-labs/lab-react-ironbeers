import React, { useState } from "react";
import axios from "axios";
function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
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
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleDescription}
      />
      <label htmlFor="firstBrewed">First Brewed</label>
      <input
        type="text"
        name="firstBrewed"
        value={firstBrewed}
        onChange={handleFirstBrewed}
      />
      <label htmlFor="brewersTips">Brewers Tips</label>
      <input
        type="text"
        name="brewersTips"
        value={brewersTips}
        onChange={handleBrewersTips}
      />
      <label htmlFor="attenuationLevel">Attenuation Level</label>
      <input
        type="number"
        name="attenuationLevel"
        value={attenuationLevel}
        onChange={handleAttenuationLevel}
      />
      <label htmlFor="contributedBy">Contributed By</label>
      <input
        type="text"
        name="contributedBy"
        value={contributedBy}
        onChange={handleContributedBy}
      />
      <button>Create</button>
    </form>
  );
}

export default NewBeer;
