// src/pages/AddBeerPage.jsx
import React, { useState } from "react";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make a POST request to create a new beer
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Beer added successfully!");
          // Clear the form after successful submission
          setFormData({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: "",
          });
        } else {
          alert("Failed to add beer.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while adding the beer.");
      });
  };

  return (
    <div>
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First Brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Brewer's Tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Beer</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
