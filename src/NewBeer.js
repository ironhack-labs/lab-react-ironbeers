import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [describe, setDescribe] = useState("");
  const [brewed, setBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState("");
  const [contributed, setContributed] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: describe,
        first_brewed: brewed,
        brewers_tips: tips,
        attenuation_level: attenuation,
        contributed_by: contributed,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header className="App-header">
        <Link to="/">🏡</Link>
      </header>
      <div style={{ padding: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            className="label"
            placeholder="Name"
            onChange={function (e) {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            className="label"
            value={tagline}
            placeholder="Tagline"
            onChange={function (e) {
              setTagline(e.target.value);
            }}
          />
          <input
            type="text"
            value={describe}
            placeholder="Description"
            className="label"
            onChange={function (e) {
              setDescribe(e.target.value);
            }}
          />
          <input
            type="text"
            value={brewed}
            className="label"
            placeholder="First brewed"
            name="first_brewed"
            onChange={function (e) {
              setBrewed(e.target.value);
            }}
          />
          <input
            type="text"
            value={tips}
            className="label"
            placeholder="Brewers tips"
            name="brewers_tips"
            onChange={function (e) {
              setTips(e.target.value);
            }}
          />
          <input
            type="number"
            name="attenuation_level"
            placeholder="Attenuation level"
            value={attenuation}
            className="label"
            onChange={function (e) {
              setAttenuation(e.target.value);
            }}
          />
          <input
            type="text"
            name="contributed_by"
            placeholder="Contributed by"
            value={contributed}
            className="label"
            onChange={function (e) {
              setContributed(e.target.value);
            }}
          />
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default NewBeer;
