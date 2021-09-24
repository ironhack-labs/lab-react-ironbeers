import React, { useState } from 'react';
import './BeerForm.css';

import NavBar from '../NavBar/NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const handleSubmit = (e, form, history) => {
  e.preventDefault();
  if (Object.values(form).some((field) => !field)) {
    window.alert('All fields are required!');
    return;
  }
  axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new', form)
    .then(() => {
      window.alert('Beer successfully created!');
      history.push('/');
    })
    .catch((err) => {
      window.alert(err);
      history.push('/');
    });
};

const handleChange = (e, form, setForm) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

const BeerForm = () => {
  const [form, setForm] = useState({
    image_url: '',
    name: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const history = useHistory();

  return (
    <div className="beer-form-container container">
      <NavBar />
      <form
        onSubmit={(e) => handleSubmit(e, form, history)}
        className="beer-form mx-3"
      >
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label ms-3 mb-0">
            <strong>Image URL</strong>
          </label>
          <input
            name="image_url"
            type="text"
            className="form-control rounded-pill"
            id="image_url"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.image_url}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label ms-3 mb-0">
            <strong>Name</strong>
          </label>
          <input
            name="name"
            type="text"
            className="form-control rounded-pill"
            id="name"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label ms-3 mb-0">
            <strong>Description</strong>
          </label>
          <textarea
            name="description"
            type="text"
            className="form-control"
            id="description"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.description}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewed" className="form-label ms-3 mb-0">
            <strong>First Brewed</strong>
          </label>
          <input
            name="first_brewed"
            type="text"
            className="form-control rounded-pill"
            id="brewed"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.first_brewed}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewer-tips" className="form-label ms-3 mb-0">
            <strong>Brewer Tips</strong>
          </label>
          <input
            name="brewers_tips"
            type="text"
            className="form-control rounded-pill"
            id="brewer-tips"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.brewers_tips}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation" className="form-label ms-3 mb-0">
            <strong>Attenuation Level</strong>
          </label>
          <input
            name="attenuation_level"
            type="number"
            className="form-control rounded-pill"
            id="attenuation"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.attenuation_level}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed" className="form-label ms-3 mb-0">
            <strong>Contributed By</strong>
          </label>
          <input
            name="contributed_by"
            type="text"
            className="form-control rounded-pill"
            id="contributed"
            onChange={(e) => handleChange(e, form, setForm)}
            value={form.contributed_by}
          />
        </div>
        <button className="btn btn-info text-light rounded-pill w-100 py-2 fs-5 mt-3    ">
          Create New Beer
        </button>
      </form>
    </div>
  );
};

export default BeerForm;
