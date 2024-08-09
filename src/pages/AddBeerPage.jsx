import React, { useState } from "react";
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log("New beer created:", response.data);
        alert("Beer added successfully!");
        setFormData({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((error) => {
        console.error("There was an error creating the beer:", error);
      });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            height: "100px",
          }}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={formData.first_brewed}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={formData.brewers_tips}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={formData.attenuation_level}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "10px" }}
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={formData.contributed_by}
          onChange={handleChange}
          required
          style={{ display: "block", width: "100%", marginBottom: "20px" }}
        />

        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#5cc0ff",
            border: "none",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ADD NEW
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
