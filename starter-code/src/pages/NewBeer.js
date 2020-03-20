import React, { useState } from "react";
import { createBeer } from "../../lib/BeersApi";
import { Header } from "../components/Header";

export const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  });

  const handleInputChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    setBeer({ ...beer, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { ...beer };
    createBeer(formData);
    console.log("beer created", formData);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={beer.name}
            onChange={handleInputChange}
            // onChange={e => setBeer({ ...beer, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="Tagline">Tagline: </label>
          <input
            type="text"
            id="tagline"
            value={beer.tagline}
            onChange={handleInputChange}
            // onChange={e => setBeer({ ...beer, tagline: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="Description">Description: </label>
          <input
            type="text"
            id="description"
            value={beer.description}
            onChange={handleInputChange}
            // onChange={e => setBeer({ ...beer, description: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="first_brewed">Date of first brew: </label>
          <input
            type="text"
            id="first_brewed"
            value={beer.first_brewed}
            onChange={handleInputChange}
            // onChange={e => setBeer({ ...beer, first_brewed: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Some tips for brewers: </label>
          <input
            type="text"
            id="brewers_tips"
            value={beer.brewers_tips}
            onChange={handleInputChange}
            // onChange={e => setBeer({ ...beer, brewers_tips: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Level of attenuation: </label>
          <input
            type="number"
            id="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleInputChange}
            // onChange={e =>
            //   setBeer({ ...beer, attenuation_level: e.target.value })
            // }
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Created by: </label>
          <input
            type="text"
            id="contributed_by"
            value={beer.contributed_by}
            onChange={handleInputChange}
            // onChange={e => setBeer({ ...beer, contributed_by: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">ADD NEW</button>
        </div>
      </form>
    </>
  );
};
