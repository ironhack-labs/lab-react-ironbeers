import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const styles = {
  input: {
    margin: '2rem 0 0 30%',
  },
};

const NewBeer = () => {
  const [beer, setBeer] = useState({
    name: '',
    image_url: '',
    tagline: '',
    contributed_by: '',
    attenuation_level: 0,
    first_brewed: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBeer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBeer = {
        name: beer.name,
        image_url: beer.image_url,
        tagline: beer.tagline,
        contributed_by: beer.contributed_by,
        attenuation_level: beer.attenuation_level,
        first_brewed: beer.first_brewed,
        description: beer.description,
      };

      setBeer((beer) => (beer = newBeer));

      const res = await axios.post('/new', beer);
      setBeer(res);
    } catch (err) {
      console.log(err);
    }

    setBeer({
      name: '',
      image_url: '',
      tagline: '',
      contributed_by: '',
      attenuation_level: 0,
      first_brewed: '',
      description: '',
    });
  };

  return (
    <div>
      <Navbar />
      <h1>Add Beer</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            value={beer.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">Image Url</span>
          </div>
          <input
            type="text"
            name="image_url"
            value={beer.image_url}
            onChange={handleChange}
            placeholder="Image Url"
          />
        </div>

        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">Tagline</span>
          </div>
          <input
            type="text"
            name="tagline"
            value={beer.tagline}
            onChange={handleChange}
            placeholder="Tagline"
          />
        </div>

        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">Contributed by</span>
          </div>
          <input
            type="text"
            name="contributed_by"
            value={beer.contributed_by}
            onChange={handleChange}
            placeholder="Contributed By"
          />
        </div>

        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">Attenuation Level</span>
          </div>
          <input
            type="number"
            name="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleChange}
            placeholder="Attenuation Level"
          />
        </div>

        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">First Brewed</span>
          </div>
          <input
            type="date"
            name="first_brewed"
            value={beer.first_brewed}
            onChange={handleChange}
            placeholder="First Brewed"
          />
        </div>

        <div className="input-group mb-3" style={styles.input}>
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <input
            type="text"
            name="description"
            value={beer.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>

        <button type="submit" style={styles.input}>
          Save
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
