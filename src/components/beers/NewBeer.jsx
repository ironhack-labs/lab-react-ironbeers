import React, { useState } from 'react';
import axios from 'axios';
import Header from '../header/Header';
function NewBeer() {
  const initialState = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
  };
  const [beer, setBeer] = useState(initialState);

  const onChange = (event) => {
    setBeer({ ...beer, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(beer);
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer);
  };

  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="image_url">Image</label>
          <input
            type="text"
            className="form-control"
            name="image_url"
            id="image_url"
            placeholder="Image URL"
            value={beer.image_url}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Beer name"
            value={beer.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">TagLine</label>
          <input
            type="text"
            className="form-control"
            name="tagline"
            id="tagline"
            placeholder="Beer tagline"
            value={beer.tagline}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            className="form-control"
            name="first_brewed"
            id="first_brewed"
            placeholder="MM/YYYY"
            value={beer.first_brewed}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            min="0"
            max="100"
            className="form-control"
            name="attenuation_level"
            id="attenuation_level"
            value={beer.attenuation_level}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            className="form-control"
            name="contributed_by"
            id="contributed_by"
            placeholder="Your Name"
            value={beer.contributed_by}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            cols="5"
            rows="5"
            className="form-control"
            name="description"
            id="description"
            value={beer.description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Add Beer" />
      </form>
    </div>
  );
}

export default NewBeer;
