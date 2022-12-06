import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewers_tips: null,
    attenuation_level: null,
    contributed_by: null,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log("alright, updated with", response, formData);
        setFormData({});
      });
  };
  return (
    <div className="form col p-5">
      <h3>Add New Beer</h3>
      <div className="col-sm-12 col-md-4">
        <form onSubmit={handleSubmit} className="form p-5   ">
          <input
            placeholder="name"
            type="text"
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
          />

          <input
            placeholder="tagline"
            type="text"
            name="tagline"
            onChange={(e) =>
              setFormData({ ...formData, tagline: e.target.value })
            }
            value={formData.tagline}
          />
          <input
            placeholder="description"
            type="text"
            name="description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
          <input
            placeholder="first brewed"
            type="text"
            name="first_brewed"
            onChange={(e) =>
              setFormData({ ...formData, first_brewed: e.target.value })
            }
            value={formData.first_brewed}
          />
          <input
            placeholder="brewer's tips"
            type="text"
            name="brewers_tips"
            onChange={(e) =>
              setFormData({ ...formData, brewers_tips: e.target.value })
            }
            value={formData.brewers_tips}
          />
          <input
            placeholder="attenuation level"
            type="number"
            name="attenuation_level"
            onChange={(e) =>
              setFormData({ ...formData, attenuation_level: e.target.value })
            }
            value={formData.attenuation_level}
          />
          <input
            placeholder="contributed by"
            type="text"
            name="contributed_by"
            onChange={(e) =>
              setFormData({ ...formData, contributed_by: e.target.value })
            }
            value={formData.contributed_by}
          />
          <br />
          <button type="submit" className="m-3">
            Create Beer
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBeer;