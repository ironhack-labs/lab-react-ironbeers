import axios from "axios";
import React, { useState } from "react";

function AddBeerPage() {
  const [image_url, setImage_Url] = useState("");
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState("");

  function handleAddBeer(event) {
    event.preventDefault();
    const newBeer = {
      image_url,
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    console.log(newBeer);

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((res) => {
        console.log("All went well!", res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setImage_Url("");
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuation_Level(0);
        setContributed_By("");
      });
  }

  return (
    <div className="content-div">
      <h2>Add a Beer!</h2>
      <form onSubmit={handleAddBeer}>
        <label>
          Image
          <input
            type="text"
            value={image_url}
            onChange={(event) => {
              setImage_Url(event.target.value);
            }}
          />
        </label>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            value={tagline}
            onChange={(event) => {
              setTagline(event.target.value);
            }}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <label>
          First Brewed
          <input
            type="text"
            value={first_brewed}
            onChange={(event) => {
              setFirst_Brewed(event.target.value);
            }}
          />
        </label>
        <label>
          Brewers Tips
          <input
            type="text"
            value={brewers_tips}
            onChange={(event) => {
              setBrewers_Tips(event.target.value);
            }}
          />
        </label>
        <label>
          Attenuation level
          <input
            type="number"
            value={attenuation_level}
            onChange={(event) => {
              setAttenuation_Level(event.target.value);
            }}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={contributed_by}
            onChange={(event) => {
              setContributed_By(event.target.value);
            }}
          />
        </label>
        <button>Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
