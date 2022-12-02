import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const CreateNewBeer = ({ setBeerList, beerList }) => {
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
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setBeerList([...beerList, body]);
      });

    navigate("/beers");
  };

  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="Name" class="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label for="tagline" class="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Tagline"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </div>
        <div className="mb-3">
          <label for="description" class="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="mb-3">
          <label for="first_brewed" class="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="first_brewed"
            name="first_brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          />
        </div>
        <div className="mb-3">
          <label for="brewers_tips" class="form-label">
            Brewers Tips
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Brewers Tips"
            name="brewers_tips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />
        </div>
        <div className="mb-3">
          <label for="attenuation_level" class="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Attenuation Level"
            name="attenuation_level"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />
        </div>
        <div className="mb-3">
          <label for="contributed_by" class="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="contributed by"
            name="contributed_by"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          ADD NEW
        </button>
      </form>
    </>
  );
};

export default CreateNewBeer;
