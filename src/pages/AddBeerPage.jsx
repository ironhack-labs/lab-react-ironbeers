import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Change here

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();  // Change here

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure attenuation_level is a number
    const newData = {
      ...formData,
      attenuation_level: Number(formData.attenuation_level),
    };

    // Send the POST request to the API
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newData)
      .then((response) => {
        // Success handling
        setSuccess("Beer added successfully!");
        setError(null);

        // Redirect to home page after a successful post
        navigate("/");  // Change here
      })
      .catch((err) => {
        // Error handling
        setError("Error adding beer. Please check the details and try again.");
        setSuccess(null);
      });
  };

  return (
    <div className="add-beer-page">
      <h1>Add a New Beer</h1>
      
      {/* Success message */}
      {success && <div style={{ color: 'green', marginBottom: '20px' }}>{success}</div>}

      {/* Error message */}
      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Brewer's Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;
