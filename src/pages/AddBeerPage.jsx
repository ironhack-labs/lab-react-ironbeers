import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBeerPage.css";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        navigate("/beers");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          First Brewed
          <input
            type="text"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          />
        </label>
        <label>
          Brewers Tips
          <input
            type="text"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />
        </label>
        <label>
          Contributed By
          <input
            type="text"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
