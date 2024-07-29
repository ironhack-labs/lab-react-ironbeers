import  { useState } from 'react';
import axios from 'axios';

const AddBeerPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    
    const payload = {
      ...formState,
      attenuation_level:  String(formState.attenuation_level)
    };

    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', payload);
      if (response.status === 200) {
        console.log('Beer successfully added:', response.data);
        setFormState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: ''
        });
      }
    } catch (error) {
      console.error('Error adding beer:', error);
    }
  };

  return (
    <div>
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formState.name}
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Tagline:
          <input 
            type="text" 
            name="tagline" 
            value={formState.tagline}
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Description:
          <textarea 
            name="description" 
            value={formState.description}
            onChange={handleChange}
            required 
          />
        </label>
        <label>
          First Brewed:
          <input 
            type="text" 
            name="first_brewed" 
            value={formState.first_brewed}
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Brewer&apos;s Tips:
          <input 
            type="text" 
            name="brewers_tips"
            value={formState.brewers_tips}
            onChange={handleChange}
            required 
          />
        </label>
        <label>
          Attenuation Level:
          <input 
            type="number" 
            name="attenuation_level"
            value={formState.attenuation_level}
            onChange={handleChange}
            required 
          />
        </label>
        <label>
          Contributed By:
          <input 
            type="text" 
            name="contributed_by"
            value={formState.contributed_by}
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