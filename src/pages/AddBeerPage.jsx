import { useState } from "react";

import axios from "axios";

const beersUrl = "https://ih-beers-api2.herokuapp.com/beers/new";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleFormChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const dateConverter = (date) => {
    const [year, month] = date.split("-");
    return `${month}/${year}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.first_brewed = dateConverter(formData.first_brewed);
    console.log(formData.first_brewed);
    try {
      const response = await axios.post(beersUrl, {
        ...formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            onChange={handleFormChange}
            type="text"
            value={formData.name}
            name="name"
            id="name"
          />
        </div>

        {/* TAGLINE */}
        <div>
          <div>
            <label htmlFor="tagline">Tagline</label>
          </div>
          <input
            onChange={handleFormChange}
            type="text"
            value={formData.tagline}
            name="tagline"
            id="tagline"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <div>
            <label htmlFor="tagline">Description</label>
          </div>
          <textarea
            onChange={handleFormChange}
            value={formData.description}
            name="description"
            id="description"
          />
        </div>

        {/* IMAGE URL */}
        <div>
          <div>
            <label htmlFor="tagline">Image URL</label>
          </div>
          <input
            onChange={handleFormChange}
            type="text"
            value={formData.image_url}
            name="image_url"
            id="image_url"
          />
        </div>

        {/* FIRST BREWED */}
        <div>
          <div>
            <label htmlFor="first_brewed">First Brewed</label>
          </div>
          <input
            onChange={handleFormChange}
            type="month"
            value={formData.first_brewed}
            name="first_brewed"
            id="first_brewed"
          />
        </div>

        {/* BREWERS TIPS */}
        <div>
          <div>
            <label htmlFor="brewers_tips">Brewers Tips</label>
          </div>
          <input
            onChange={handleFormChange}
            type="string"
            value={formData.brewers_tips}
            name="brewers_tips"
            id="brewers_tips"
          />
        </div>

        {/* ATTENUATION LEVEL */}
        <div>
          <div>
            <label htmlFor="attenuation_level">Attenuation Level</label>
          </div>
          <input
            onChange={handleFormChange}
            type="number"
            value={formData.attenuation_level}
            name="attenuation_level"
            id="attenuation_level"
          />
        </div>

        {/* CREATED BY */}
        <div>
          <div>
            <label htmlFor="contributed_by">Contributed By</label>
          </div>
          <input
            onChange={handleFormChange}
            type="text"
            value={formData.contributed_by}
            name="contributed_by"
            id="contributed_by"
          />
        </div>
        <br />
        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
