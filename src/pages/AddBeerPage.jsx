import React, { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstbrewed, setFirstBrewed] = useState("");
  const [brewertips, setBrewertips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstbrewed,
        brewer_tips: brewertips,
        attenuation: attenuation,
        contributed_by: contributedBy,
      })
      .then((resp) => {
        console.log(resp);
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewertips("");
        setAttenuation(0);
        setContributedBy("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form" method="post">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
        />

        <label htmlFor="tagline">Tagline:</label>
        <input
          onChange={(e) => setTagline(e.target.value)}
          type="text"
          name="tagline"
          value={tagline}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          rows="4"
          cols="50"
          value={description}
        ></textarea>

        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          onChange={(e) => setFirstBrewed(e.target.value)}
          type="text"
          name="first_brewed"
          value={firstbrewed}
        />

        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input
          onChange={(e) => setBrewertips(e.target.value)}
          type="text"
          name="brewers_tips"
          value={brewertips}
        />

        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input
          onChange={(e) => setAttenuation(e.target.value)}
          type="number"
          name="attenuation_level"
          value={attenuation}
        />

        <label htmlFor="contributed_by">Contributed By:</label>
        <input
          onChange={(e) => setContributedBy(e.target.value)}
          type="text"
          name="contributed_by"
          value={contributedBy}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
