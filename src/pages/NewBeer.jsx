import axios from 'axios';
import { useState } from 'react';

import Header from '../components/Header.jsx';

const blankForm = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  };

function NewBeer(props) {
  const [ formData, setFormData ] = useState(blankForm);

  const resetForm = () => { setFormData(blankForm); };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = formData;
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then(response => {
        console.log('response status', response.status);
        resetForm();
      })
      .catch((error) => {
        resetForm();
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="add-beer-form">
        <h2>Add your beer</h2>
        <form onSubmit={handleSubmit}>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input value={formData.name} name="name" type="text" onChange={(event) => {
              setFormData({ ...formData, name: event.target.value}); }}/>
          </div>

          <div className="field">
            <label htmlFor="tagline">Tagline</label>
            <input value={formData.tagline} name="tagline" type="text" onChange={(event) => {
              setFormData({ ...formData, tagline: event.target.value}); }}/>
          </div>

          <div className="field">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="content" value={formData.description}
                      onChange={(event) =>
                                setFormData({...formData, description: event.target.value})} />
          </div>

          <div className="field">
            <label htmlFor="first_brewed">First Brewed</label>
            <input value={formData.first_brewed} name="first_brewed" type="text" onChange={(event) => {
              setFormData({ ...formData, first_brewed: event.target.value}); }}/>
          </div>

          <div className="field">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input value={formData.brewers_tips} name="brewers_tips" type="text" onChange={(event) => {
              setFormData({ ...formData, brewers_tips: event.target.value}); }}/>
          </div>

          <div className="field">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input value={formData.attenuation_level} name="attenuation_level" type="number" onChange={(event) => {
              setFormData({ ...formData, attenuation_level: event.target.value}); }}/>
          </div>

          <div className="field">
            <label htmlFor="contributed_by">Contributed By</label>
            <input value={formData.contributed_by} name="contributed_by" type="text" onChange={(event) => {
              setFormData({ ...formData, contributed_by: event.target.value}); }}/>
          </div>

          <input type="submit" className="form-btn" value="ADD NEW" />

        </form>
      </div>
    </>
  );
}

export default NewBeer;
