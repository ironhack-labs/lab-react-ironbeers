import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
    image_url: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "attenuation_level" ? Number(value) : value  
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log("Beer created successfully ✅", response.data);
        alert("Beer added! 🍺");
        // Optionally: redirect or reset form
        setFormData({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
          image_url: ""
        });
      })
      .catch((error) => {
        console.error("Error creating beer ❌", error);
        alert("Failed to create beer.");
      });
  };

  return (
    <div className="container mt-5">
      <h2>Add a New Beer</h2>
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Tagline:</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>First Brewed:</label>
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />

        <label>Brewers Tips:</label>
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />

        <label>Attenuation Level:</label>
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} required />

        <label>Contributed By:</label>
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />

        <label>Image URL:</label>
        <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
