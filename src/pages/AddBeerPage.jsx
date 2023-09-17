import React, { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Créez un objet contenant les valeurs des champs du formulaire
    const beerData = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerData)
      .then((response) => {
        console.log("Beer added successfully!", response.data);

        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
      })
      .catch((error) => {
        console.error("Error adding beer:", error);
      });
  };

  return (
    <div>
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
            required
          />
        </label>

        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewers_tips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
            required
          />
        </label>

        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
            required
          />
        </label>

        <label>
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
            required
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
