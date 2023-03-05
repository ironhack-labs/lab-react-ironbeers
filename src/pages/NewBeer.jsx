import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributed, setContributed] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributed,
    };

    try {
      // await axios.post(
      //     'https://ih-beers-api2.herokuapp.com/beers/new',
      //     newBeer,
      // )
      // navigate('/beers')
      await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
        method: "post",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(newBeer),
      });
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ fontWeight: "900" }}>Name</label>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div>
        <label style={{ fontWeight: "900" }}>Tagline</label>
        <input
          onChange={(event) => setTagline(event.target.value)}
          value={tagline}
          type="text"
          name="tagline"
          id="tagline"
        />
      </div>
      <div>
        <label style={{ fontWeight: "900" }}>Description</label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div>
        <label style={{ fontWeight: "900" }}>First Brewed</label>
        <input
          onChange={(event) => setFirstBrewed(event.target.value)}
          value={firstBrewed}
          type="text"
          name="first_brewed"
          id="first_brewed"
        />
      </div>
      <div>
        <label style={{ fontWeight: "900" }}>Brewers Tips</label>
        <input
          onChange={(event) => setBrewersTips(event.target.value)}
          value={brewersTips}
          type="text"
          name="brewers_tips"
          id="brewers_tips"
        />
      </div>
      <div>
        <label style={{ fontWeight: "900" }}>Attenuation Level</label>
        <input
          onChange={(event) => setAttenuationLevel(event.target.value)}
          value={attenuationLevel}
          min="0"
          type="number"
          name="attenuation_level"
          id="attenuation_level"
        />
      </div>
      <div>
        <label style={{ fontWeight: "900" }}>Contributed By</label>
        <input
          onChange={(event) => setContributed(event.target.value)}
          value={contributed}
          type="text"
          name="contributed_by"
          id="contributed_by"
        />
      </div>
      <button>ADD NEW BEER</button>
    </form>
  );
};

export default NewBeer;
