import Navbars from "./Navbars";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [fistBrewed, setFistBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributor, setContributor] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeerBody = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: fistBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuation,
      contributed_by: contributor,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerBody)
      .then((response) => {
        console.log("new beer: ", newBeerBody);
        setName("");
        setTagline("");
        setDescription("");
        setFistBrewed("");
        setBrewersTips("");
        setAttenuation(0);
        setContributor("");

        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbars />
      <h1>New Beer</h1>

      <form onSubmit={handleSubmit} className="new-beer-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-group">
          <label>First Brewed</label>
          <input
            type="text"
            name="fistBrewed"
            onChange={(e) => setFistBrewed(e.target.value)}
            value={fistBrewed}
          />
        </div>
        <div className="form-group">
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewersTips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />
        </div>
        <div className="form-group">
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation"
            onChange={(e) => setAttenuation(e.target.value)}
            value={attenuation}
          />
        </div>
        <div className="form-group">
          <label>Contributor</label>
          <input
            type="text"
            name="contributor"
            onChange={(e) => setContributor(e.target.value)}
            value={contributor}
          />
        </div>

        <button type="submit">Create New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
