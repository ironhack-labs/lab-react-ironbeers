import axios from "axios";
import React, { useState } from "react";
import Header from "./Header";
import { API_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import "./NewBeer.css";

const useNewBeer = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addNewBeer = (beerDetails) => {
    setLoading(true);
    axios
      .post(`${API_URL}/new`, beerDetails)
      .then(() => {
        setLoading(false);
        navigate("/beers");
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return { error, loading, addNewBeer };
};

export default function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contribution, setContribution] = useState("");
  const { error, loading, addNewBeer } = useNewBeer();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBeer({
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_by: contribution,
    });
  };

  return (
    <div>
      <Header />
      {error ? <span>Error</span> : loading ? <span>Loading...</span> : null}
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <p>Name:</p>

          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            className="input"
          />
        </label>
        <label>
          <p>Tagline:</p>

          <input
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
            type="text"
            name="tagline"
          />
        </label>
        <label>
          <p>Description:</p>

          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            name="description"
            className="textarea"
          ></textarea>
        </label>
        <label>
          <p>First Brewed:</p>

          <input
            value={firstBrewed}
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
            type="text"
            name="first_brewed"
          />
        </label>
        <label>
          <p>Brewers Tips:</p>

          <input
            value={tips}
            onChange={(e) => {
              setTips(e.target.value);
            }}
            type="text"
            name="brewers_tips"
          />
        </label>
        <label>
          <p>Attenuation Level:</p>

          <input
            value={attenuation}
            onChange={(e) => {
              setAttenuation(e.target.value);
            }}
            type="number"
            name="attenuation_level"
          />
        </label>
        <label>
          <p>Contributed By:</p>

          <input
            value={contribution}
            onChange={(e) => {
              setContribution(e.target.value);
            }}
            type="text"
            name="contributed_by"
          />
        </label>
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}
