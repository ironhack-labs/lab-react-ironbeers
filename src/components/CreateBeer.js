import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function CreateBeer() {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    image_url: "https://images.punkapi.com/v2/keg.png",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        setNewBeer({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
          image_url: "https://images.punkapi.com/v2/keg.png",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/beers");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setNewBeer({ ...newBeer, name: e.target.value });
          }}
          value={newBeer.name}
        />
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => {
            setNewBeer({ ...newBeer, tagline: e.target.value });
          }}
          value={newBeer.tagline}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setNewBeer({ ...newBeer, description: e.target.value });
          }}
          value={newBeer.description}
        />
        <label>First brewed:</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => {
            setNewBeer({ ...newBeer, first_brewed: e.target.value });
          }}
          value={newBeer.first_brewed}
        />
        <label>Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => {
            setNewBeer({ ...newBeer, brewers_tips: e.target.value });
          }}
          value={newBeer.brewers_tips}
        />
        <label>Attenuation:</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => {
            setNewBeer({ ...newBeer, attenuation_level: e.target.value });
          }}
          value={newBeer.attenuation_level}
        />
        <label>Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => {
            setNewBeer({ ...newBeer, contributed_by: e.target.value });
          }}
          value={newBeer.contributed_by}
        />
        <button type="submit">Add beer</button>
      </form>
    </div>
  );
}

export default CreateBeer;
