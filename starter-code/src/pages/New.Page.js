import React, { useState } from "react";
import axios from "axios";
import { FormBox, H2Form } from "../../public/styles/Form";

export const NewBeer = () => {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  });

  const addNewBeer = async () => {
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
    } catch (err) {
      console.log("Creation of beer bailed ", err);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewBeer();
    console.log("added new beer ", newBeer);
  };

  return (
    <>
      <H2Form>Add New Beer</H2Form>
      <FormBox onSubmit={handleSubmit}>
        <div className="box-input">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={newBeer.name}
            onChange={e => setNewBeer({ ...newBeer, name: e.target.value })}
          />
        </div>
        <div className="box-input">
          <label htmlFor="tagLine">TagLine: </label>
          <input
            type="text"
            id="tagLine"
            value={newBeer.tagLine}
            onChange={e => setNewBeer({ ...newBeer, tagLine: e.target.value })}
          />
        </div>
        <div className="box-input">
          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="description"
            value={newBeer.description}
            onChange={e =>
              setNewBeer({ ...newBeer, description: e.target.value })
            }
          />
        </div>
        <div className="box-input">
          <label htmlFor="first_brewed">Date of first brew: </label>
          <input
            type="text"
            id="first_brewed"
            value={newBeer.first_brewed}
            onChange={e =>
              setNewBeer({ ...newBeer, first_brewed: e.target.value })
            }
          />
        </div>
        <div className="box-input">
          <label htmlFor="brewers_tips">Brewers Tips: </label>
          <input
            type="text"
            id="brewers_tips"
            value={newBeer.brewers_tips}
            onChange={e =>
              setNewBeer({ ...newBeer, brewers_tips: e.target.value })
            }
          />
        </div>
        <div className="box-input">
          <label htmlFor="attenuation_level">Attenuation Level: </label>
          <input
            type="number"
            id="attenuation_level"
            value={newBeer.attenuation_level}
            onChange={e =>
              setNewBeer({ ...newBeer, attenuation_level: e.target.value })
            }
          />
        </div>
        <div className="box-input">
          <label htmlFor="contributed_by">Created by: </label>
          <input
            type="text"
            id="contributed_by"
            value={newBeer.contributed_by}
            onChange={e =>
              setNewBeer({ ...newBeer, contributed_by: e.target.value })
            }
          />
        </div>
        <button type="submit">Add beer!</button>
      </FormBox>
    </>
  );
};
