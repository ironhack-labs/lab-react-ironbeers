import React from "react";
import axios from "axios";

import "./NewBeerPage.css";

const NewBeerPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // specifics of this form submission
    axios({
      method: "POST",
      url: "https://ih-beers-api2.herokuapp.com/beers/new",
      data: {
        name: "name",
        tagline: "tagline",
        description: "description",
        first_brewed: "first_brewed",
        brewers_tips: "brewers_tips",
        attenuation_level: "attenuation_level",
        contributed_by: "contributed_by",
      },
    }).then((response) => {
      console.log("response.data", response.data);

      // clear the form
      setHeadline("");
      setPrice(1);

      // tell the user about the success
      setHasCreatedApartment(true);

      navigate("/");
    });
  };

  return (
    <>
      <form className="newBeerFrom" onSubmit={handleSubmit}>
        <div className="group-input">
          <label>Name</label>
          <input className="input-like" type="text" name="name" id="name" />
        </div>
        <div className="group-input">
          <label>Tagline</label>
          <input
            className="input-like"
            type="text"
            name="tagline"
            id="tagline"
          />
        </div>
        <div className="group-input">
          <label>Description</label>
          <textarea
            className="input-like"
            type="text"
            name="description"
            id="description"
          />
        </div>
        <div className="group-input">
          <label>First brewed</label>
          <input
            className="input-like"
            type="text"
            name="first_brewed"
            id="first_brewed"
          />
        </div>
        <div className="group-input">
          <label>Brewers tips</label>
          <input
            className="input-like"
            type="text"
            name="brewers_tips"
            id="brewers_tips"
          />
        </div>
        <div className="group-input">
          <label>Attenuation level</label>
          <input
            className="input-like"
            type="text"
            name="attenuation_level"
            id="attenuation_level"
          />
        </div>
        <div className="group-input">
          <label>Contributed By</label>
          <input
            className="input-like"
            type="number"
            name="contributed_by"
            id="contributed_by"
          />
        </div>
        <div className="group-input">
          <input
            className="input-like"
            type="submit"
            name="submit"
            id="submit"
            value="Add new"
          />
        </div>
      </form>
    </>
  );
};

export default NewBeerPage;
