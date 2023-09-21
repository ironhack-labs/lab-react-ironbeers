import Header from '../components/Header';
import { useState } from 'react';
import '../pages/NewBeer.css';
import axios from 'axios';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagLine] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating the body for the POST request
    // using the object property value shorthand
    // values are coming from the state variable
    const body = { name, tagline, description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy };
    console.log(body);

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new')
      .then((response) => {
        console.log(response.data);
        setName('');
        setTagLine('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel(0);
        setContributedBy('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
          </div>

          <div className="input-container mb-25">
            <label className="d-block" htmlFor="tagline">
              Tagline
            </label>
            <input type="text" name="tagline" onChange={(e) => setTagLine(e.target.value)} value={tagline} />
          </div>

          <div className="input-container mb-25">
            <label className="d-block" htmlFor="description">
              Description
            </label>
            <textarea type="text" rows="10" cols="50" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>

          <div className="input-container mb-25">
            <label className="d-block" htmlFor="first-brewed">
              First Brewed
            </label>
            <input type="text" name="first-brewed" onChange={(e) => setFirstBrewed(e.target.value)} value={firstBrewed} />
          </div>

          <div className="input-container mb-25">
            <label className="d-block" htmlFor="brewers-tips">
              Brewers Tips
            </label>
            <input type="text" name="brewers-tips" onChange={(e) => setBrewersTips(e.target.value)} value={brewersTips} />
          </div>

          <div className="input-container mb-25">
            <label className="d-block" htmlFor="attenuation-level">
              Attenuation Level
            </label>
            <input type="number" name="attenuation-level" onChange={(e) => setAttenuationLevel(e.target.value)} value={attenuationLevel} />
          </div>

          <div className="input-container mb-25">
            <label className="d-block" htmlFor="contributed-by">
              Contributed by
            </label>
            <input type="text" name="contributed-by" onChange={(e) => setContributedBy(e.target.value)} value={contributedBy} />
          </div>
        </div>

        <button type="submit">Add New</button>
      </form>
    </div>
  );
}

export default NewBeer;
