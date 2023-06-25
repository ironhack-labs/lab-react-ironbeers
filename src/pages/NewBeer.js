import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewBeer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [brewTips, setBrewTips] = useState('');
  const [contributedBy, setContributedBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      attenuation_level: attenuationLevel,
      brew_tips: brewTips,
      contributed_by: contributedBy,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/new`, newBeer)
      .then(() => {
        navigate('/beers');
      })
      .catch((e) => console.log('Error creating new Beer....', e));
  };

  return (
    <div classNameName="new-beer">
      <form onSubmit={handleSubmit} className="m-3">
        {/* Row */}
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label for="name" className="form-label align-self-start">
                Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required={true}
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label for="ref" className="form-label align-self-start">
                Tagline
              </label>
              <input
                type="text"
                className="form-control"
                id="tagline "
                name="tagline"
                value={tagline}
                placeholder="Enter Tagline"
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Row */}
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label for="stock" className="form-label align-self-start">
                Description
              </label>
              <input
                type="textarea"
                style={{ height: '80px' }}
                className="form-control"
                id="description"
                name="description"
                value={description}
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Row */}
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label for="first_brewed" className="form-label align-self-start">
                First Brew
              </label>
              <input
                type="text"
                className="form-control"
                id="first_brewed"
                name="first_brewed"
                value={firstBrewed}
                placeholder="Enter First Brewed"
                onChange={(e) => setFirstBrewed(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label
                for="attenuation_level"
                className="form-label align-self-start"
              >
                Attenuation Level
              </label>
              <input
                type="number"
                min={1}
                className="form-control"
                id="attenuation_level"
                name="attenuation_level"
                value={attenuationLevel}
                placeholder="Enter Attenuation Level"
                onChange={(e) => setAttenuationLevel(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Row */}
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label
                for="brewers_tips "
                className="form-label align-self-start"
              >
                Brew tips
              </label>
              <input
                type="textarea"
                style={{ height: '80px' }}
                className="form-control"
                id="brewers_tips "
                name="brewers_tips "
                value={brewTips}
                placeholder="Enter Brew Tips"
                onChange={(e) => setBrewTips(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Row */}
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 d-flex flex-column justify-content-center">
              <label
                for="contributed_by "
                className="form-label align-self-start"
              >
                Contributed By
              </label>
              <input
                type="text"
                className="form-control"
                id="contributed_by "
                name="contributed_by "
                value={contributedBy}
                placeholder="Enter Contributed By"
                onChange={(e) => setContributedBy(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12 d-flex flex-column justify-content-center pt-3">
            <button class="col-4 btn btn-primary align-self-center mb-1">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
