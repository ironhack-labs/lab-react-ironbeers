import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newBeer = {
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
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel(0);
      setContributedBy("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      <form onSubmit={handleSubmit} className="card" style={{ width: "50%" }}>
        <div className="card-body" style={{ fontWeight: "bolder" }}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: 50 }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Tagline</label>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: 50 }}
              value={tagline}
              onChange={(e) => {
                setTagline(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              style={{ borderRadius: 20, height: 150 }}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>First Brewed</label>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: 50 }}
              value={firstBrewed}
              onChange={(e) => {
                setFirstBrewed(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Brewers Tips</label>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: 50 }}
              value={brewersTips}
              onChange={(e) => {
                setBrewersTips(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Attenuation Level</label>
            <input
              type="number"
              className="form-control"
              style={{ borderRadius: 50 }}
              value={attenuationLevel}
              onChange={(e) => {
                setAttenuationLevel(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="form-group">Contributed By</label>
            <input
              type="text"
              className="form-control"
              style={{ borderRadius: 50 }}
              value={contributedBy}
              onChange={(e) => {
                setContributedBy(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              style={{ margin: 10, borderRadius: 50, width: "98%" }}
              className="btn btn-primary"
            >
              ADD NEW
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
