import Header from '../components/Header';
import { useState, useEffect } from 'react';
import '../pages/NewBeer.css';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagLine] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-align-left form-container">
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="name">
              Name
            </label>
            <input type="text" />
          </div>
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="tagline">
              Tagline
            </label>
            <input type="text" />
          </div>
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="Description">
              Description
            </label>
            <textarea type="text" rows="10" cols="50" />
          </div>
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="First Brewed">
              First Brewed
            </label>
            <input type="text" />
          </div>
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="Brewers Tips">
              Brewers Tips
            </label>
            <input type="text" />
          </div>
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="Attenuation Level">
              Attenuation Level
            </label>
            <input type="number" />
          </div>
          <div className="input-container mb-25">
            <label className="d-block" htmlFor="contributed by">
              Contributed by
            </label>
            <input type="text" />
          </div>
        </div>
      </form>
      <button>Add New</button>
    </div>
  );
}

export default NewBeer;
