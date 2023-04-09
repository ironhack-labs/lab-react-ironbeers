import React, { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
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

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Tagline:</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>First Brewed:</label>
        <input
          type="text"
          id="firstBrewed"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
          required
        />
        <label>Brewers Tips:</label>
        <input
          type="text"
          id="brewersTips"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        <label>Attenuation Level:</label>
        <input
          type="number"
          id="attenuationLevel"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}

        />
        <label>Contributed By:</label>
        <input
          type="text"
          id="contributedBy"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}

        />
        <button type="submit">Add New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
