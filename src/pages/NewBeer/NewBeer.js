import React from 'react';
import axios from 'axios';

function NewBeer() {
  const initialState = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  const [state, setState] = React.useState(initialState);

  const addNewBeer = async () => {
    try {
      const addNewOne = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        {
          ...state,
        }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewBeer();
    setState(initialState);
  };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br />
        <label>Tagline</label>
        <br />
        <input
          type="text"
          name="tagline"
          value={state.tagline}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          rows="4"
          cols="20"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <br />
        <label>First Brewed</label>
        <br />
        <input
          type="text"
          name="first_brewed"
          value={state.text}
          onChange={handleChange}
        />
        <br />
        <label>Brewers Tips</label>
        <br />
        <input
          type="text"
          name="brewers_tips"
          value={state.brewers_tips}
          onChange={handleChange}
        />
        <br />
        <label>Attenuation Level</label>
        <br />
        <input
          type="number"
          name="attenuation_level"
          value={state.attenuation_level}
          onChange={handleChange}
        />
        <br />
        <label>Contributed By</label>
        <br />
        <input
          type="text"
          name="contributed_by"
          value={state.contributed_by}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
