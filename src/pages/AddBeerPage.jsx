import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddBeerPage() {
  const navigate = useNavigate();

  const [beerData, setBeerData] = useState({
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
    setBeerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', beerData)
      .then((response) => {
        console.log('Beer created', response.data);
        navigate('/beers'); 
      })
      .catch((error) => {
        console.error('Error creating beer:', error);
      });
  };

  return (
    <form className='add-beer-form' onSubmit={handleSubmit}>
      <div>
      <h1>Add a beer</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={beerData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={beerData.tagline}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={beerData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={beerData.first_brewed}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={beerData.brewers_tips}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={beerData.attenuation_level}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={beerData.contributed_by}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Add Beer</button>
      </div>
    </form>
  );
}

export default AddBeerPage;

