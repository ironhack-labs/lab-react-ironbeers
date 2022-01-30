import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
        console.log(response);
        navigate("/beer");
      })
      .catch((e) => {
        console.log(e);
        setError("There was an error, please try again");
      });
  };

  return (
    <div>
      <h1>HIHI</h1>
      <Link to="/">
        <i class="fas fa-home"></i>Home
      </Link>
      <form onSubmit={handleSubmit}>
        {error !== "" && <p>{error}</p>}
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tagline">tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstBrewed">firstBrewed</label>
          <input
            type="text"
            id="firstBrewed"
            name="firstBrewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="brewersTips">brewersTips</label>
          <input
            type="text"
            id="brewersTips"
            name="brewersTips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="attenuationLevel">attenuationLevel</label>
          <input
            type="number"
            id="attenuationLevel"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contributedBy">contributedBy</label>
          <input
            type="text"
            id="contributedBy"
            name="contributedBy"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </div>
        <button>Create a beer !</button>
      </form>
    </div>
  );
};

export default NewBeer;
