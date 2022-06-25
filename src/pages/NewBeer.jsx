import { useState } from 'react';
import axios from 'axios';

import './NewBeer.css';

const NewBeer = () => {
  const emptyFields = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  const [newBeer, setNewBeer] = useState(emptyFields);

  function handleChange(e) {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `https://ih-beers-api2.herokuapp.com/beers/new`,
      data: newBeer,
    })
      .then((res) => {
        console.log(res);
        setNewBeer(emptyFields);
        window.alert(`Success! You added a new beer.`);
      })
      .catch(err => {
        console.error(err);
        window.alert(`Please make sure all the field are filled correctly.`)
      });

  }

  const {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  } = newBeer;

  return (
    <form onSubmit={handleSubmit}>

      <label>Name</label>
      <input
        value={name}
        type='text'
        name='name'
        onChange={e => handleChange(e)}
      />

      <label>Tagline</label>
      <input
        value={tagline}
        type='text'
        name='tagline'
        onChange={e => handleChange(e)}
      />

      <label>Description</label>
      <textarea name='description'
        value={description}
        onChange={e => handleChange(e)}>
      </textarea>

      <label>First Brewed</label>
      <input
        value={first_brewed}
        type='text'
        name='first_brewed'
        onChange={e => handleChange(e)}
      />

      <label>Brewers Tips</label>
      <input
        value={brewers_tips}
        type='text'
        name='brewers_tips'
        onChange={e => handleChange(e)}
      />

      <label>Attenuation Level</label>
      <input
        value={attenuation_level}
        type='number'
        name='attenuation_level'
        min={0}
        onChange={e => handleChange(e)}
      />

      <label>Contributed By</label>
      <input
        value={contributed_by}
        type='text'
        name='contributed_by'
        onChange={e => handleChange(e)}
      />

      <button>ADD NEW</button>
    </form>
  );
}

export default NewBeer;
