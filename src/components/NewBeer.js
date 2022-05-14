// a form to add a new beer

import React from "react";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");
        navigate("/beers");
      });
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Beer Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name of Beer"
          />
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
            placeholder="TagLine for Beer"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description of the beautiful beer"
          />
        </div>
        <div className="form-group">
          <label>First Brewed</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
            placeholder="The date this wonderous liquid first appeared in our lands"
          />
        </div>
        <div className="form-group">
          <label>Brewers Tips</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
            placeholder="Tips from the amazing human that created this beer"
          />
        </div>
        <div className="form-group">
          <label>Attenuation Level</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
            placeholder="If you were yeast, attenuation would simply be how much of your restaurant meal you actually consumed"
          />
        </div>
        <div className="form-group">
          <label>Contributed By</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
            placeholder="The name of the human who brought this liquid into being"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewBeer;
