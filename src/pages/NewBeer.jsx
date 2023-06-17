import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import headerImg from "../assets/headerImg.png";
import axios from "axios";

function NewBeer() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const create = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        formInput
      );
      setFormInput({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      });
      navigate("/");
      console.log("created data", create);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <Link to="/">
          <img src={headerImg} alt="headerImg" />
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formInput.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Tagline:
            <input
              type="text"
              name="tagline"
              value={formInput.tagline}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              name="description"
              value={formInput.description}
              onChange={handleChange}></textarea>
          </label>
          <label>
            First Brewed:
            <input
              type="text"
              name="first_brewed"
              value={formInput.first_brewed}
              onChange={handleChange}
            />
          </label>
          <label>
            Brewers Tips:
            <input
              type="text"
              name="brewers_tips"
              value={formInput.brewers_tips}
              onChange={handleChange}
            />
          </label>
          <label>
            Attenuation Level:
            <input
              type="number"
              name="attenuation_level"
              value={formInput.attenuation_level}
              onChange={handleChange}
            />
          </label>
          <label>
            Contributed By:
            <input
              type="text"
              name="contributed_by"
              value={formInput.contributed_by}
              onChange={handleChange}
            />
            <div className="button-center">
              <button type="submit">Add new</button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
