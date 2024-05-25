
import { useState } from 'react';
import * as beerAPIs from '../api/beers.js'

const AddBeerPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: name === 'attenuation_level' ? Number(value) : value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await beerAPIs.create (formData);
        if (response.status === 200) {
          alert('Beer added successfully!');
          setFormData({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
          });
        }
      } catch (error) {
        console.error('Error adding beer:', error);
        alert('Failed to add beer. Please try again.');
      }
    };
  
    return (
      <div className="add-beer-page">
        <h1>Add a New Beer</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Tagline:
            <input
              type="text"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label>
            First Brewed:
            <input
              type="text"
              name="first_brewed"
              value={formData.first_brewed}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Brewer's Tips:
            <input
              type="text"
              name="brewers_tips"
              value={formData.brewers_tips}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Attenuation Level:
            <input
              type="number"
              name="attenuation_level"
              value={formData.attenuation_level}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Contributed By:
            <input
              type="text"
              name="contributed_by"
              value={formData.contributed_by}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  };
  
  export default AddBeerPage;