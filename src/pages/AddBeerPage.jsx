import { useState } from 'react';

const AddBeerPage = () => {
    const [beerData, setBeerData] = useState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      attenuation_level: '',
      contributed_by: '',
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(beerData),
        });
  
        if (response.status === 200) {
          console.log('Beer added successfully!');
          // Reset form fields
          setBeerData({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewer_tips: '',
            attenuation_level: '',
            contributed_by: '',
          });
        } else {
          console.error('Error adding beer:', response.statusText);
        }
      } catch (error) {
        console.error('Error adding beer:', error);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setBeerData({
        ...beerData,
        [name]: value,
      });
    };
  
    return (
      <div>
        <h1>Add a New Beer</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={beerData.name} onChange={handleChange} />
  
          <label>Tagline</label>
          <input type="text" name="tagline" value={beerData.tagline} onChange={handleChange} />
  
          <label>Description</label>
          <textarea name="description" value={beerData.description} onChange={handleChange} />
  
          <label>First Brewed</label>
          <input type="text" name="first_brewed" value={beerData.first_brewed} onChange={handleChange} />
  
          <label>Brewer's Tips</label>
          <input type="text" name="brewer_tips" value={beerData.brewer_tips} onChange={handleChange} />
  
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleChange}
          />
  
          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleChange}
          />
  
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  };
  
  export default AddBeerPage;

