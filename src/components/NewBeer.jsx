import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewBeer = ({ addNewBeer }) => {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewBeer(newBeer);
    setNewBeer({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };

  return (
    <>
      <header>
        <Link to="/">
          <img src={require("../assets/header_home.png")} alt="header"></img>
        </Link>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" value={newBeer.name} name="name" onChange={(element) => setNewBeer({ ...newBeer, name: element.target.value })} />
        </label>
        <label>
          Tagline :
          <input type="text" value={newBeer.tagline} name="tagline" onChange={(element) => setNewBeer({ ...newBeer, tagline: element.target.value })} />
        </label>
        <label>
          Description :
          <input
            type="text"
            value={newBeer.description}
            name="description"
            onChange={(element) => setNewBeer({ ...newBeer, description: element.target.value })}
          />
        </label>
        <label>
          First Brewed :
          <input
            type="text"
            value={newBeer.first_brewed}
            name="first_brewed"
            onChange={(element) => setNewBeer({ ...newBeer, first_brewed: element.target.value })}
          />
        </label>
        <label>
          Brewers Tips :
          <input
            type="text"
            value={newBeer.brewers_tips}
            name="brewers_tips"
            onChange={(element) => setNewBeer({ ...newBeer, brewers_tips: element.target.value })}
          />
        </label>
        <label>
          Attenuation Level :
          <input
            type="number"
            value={newBeer.attenuation_level}
            name="attenuation_level"
            onChange={(element) => setNewBeer({ ...newBeer, attenuation_level: element.target.value })}
          />
        </label>
        <label>
          Contributed By :
          <input
            type="text"
            value={newBeer.contributed_by}
            name="contributed_by"
            onChange={(element) => setNewBeer({ ...newBeer, contributed_by: element.target.value })}
          />
        </label>
        <button type="submit">ADD NEW</button>
      </form>
    </>
  );
};

export default NewBeer;
