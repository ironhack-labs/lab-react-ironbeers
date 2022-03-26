import React from "react";
import axios from "axios";
import { useState } from "react";

export const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTips = (e) => setBrewerTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleCreate = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewerTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleCreate}
        style={{ width: "50%", marginTop: "50px", fontSize: "1.1rem" }}
        className="text-start"
      >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={handleName}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={tagline}
            onChange={handleTagline}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={description}
            onChange={handleDescription}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Brewer tips
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={brewerTips}
            onChange={handleBrewerTips}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Attenuation level
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            min="0"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Contributed by
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={contributedBy}
            onChange={handleContributedBy}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-outline-success text-center"
            style={{
              borderRadius: "20px",
              fontSize: "1.3rem",
              marginBottom: "10%",
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
