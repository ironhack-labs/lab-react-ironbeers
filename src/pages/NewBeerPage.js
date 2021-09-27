import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddApartmentPage() {
  const URL = 'https://ih-beers-api2.herokuapp.com/beers/new';

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');

  const history = useHistory();

  const handleHeadLineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleChangePrice = (newNumberEntered) => {
    setPrice(newNumberEntered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let objectToSubmit = { title: headline, pricePerDay: price };
    axios.post(URL, objectToSubmit).then(() => {
      setHeadline('');
      setPrice(0);
      history.push('/');
    });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="headline"
          value={headline}
          onChange={handleHeadLineChange}
        />
        <input
          type="number"
          name="pricePerDay"
          value={price}
          onChange={(e) => handleChangePrice(e.target.value)}
        />
        <button trype="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
