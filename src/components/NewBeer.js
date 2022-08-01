import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeers(fetchBeers) {
  const [name, setName] = useState();
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState();
  const [firstBrewed, setFirstBrewed] = useState();
  const [brewersTips, setBrewersTips] = useState();
  const [attenuationLevel, setAttenuationLevel] = useState();
  const [contributedBy, setContributedBy] = useState();

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTipsInput = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevelInput = (e) =>
    setAttenuationLevel(e.target.value);
  const handleContributedByInput = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/new", newBeer)
      .then((response) => {
        console.log(response);
        navigate(`../`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='create-beer-wrapper'>
      <form className='create-beer-form' onSubmit={handleSubmit}>
        <label>
          <strong>Name</strong>
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleNameInput}
          required
        />
        <label>
          <strong>Tagline</strong>
        </label>
        <input
          type='text'
          name='tagline'
          value={tagline}
          onChange={handleTaglineInput}
          required
        />
        <label>
          <strong>Description</strong>
        </label>
        <textarea
          type='text'
          rows='5'
          name='description'
          value={description}
          onChange={handleDescriptionInput}
          required
        />
        <label>
          <strong>First Brewed</strong>
        </label>
        <input
          type='text'
          name='first_brewed'
          value={firstBrewed}
          onChange={handleFirstBrewedInput}
          required
        />
        <label>
          <strong>Brewers Tips</strong>
        </label>
        <input
          type='text'
          name='brewers_tips'
          value={brewersTips}
          onChange={handleBrewersTipsInput}
          required
        />
        <label>
          <strong>Attenuation Level</strong>
        </label>
        <input
          type='number'
          min='0'
          max='100'
          name='attenuation_level'
          value={attenuationLevel}
          onChange={handleAttenuationLevelInput}
          required
        />
        <label>
          <strong>Contributed By</strong>
        </label>
        <input
          type='text'
          name='contributed_by'
          value={contributedBy}
          onChange={handleContributedByInput}
          required
        />
        <button type='submit' id='add-beer-button'>
          <strong>ADD NEW</strong>
        </button>
      </form>
    </div>
  );
}

export default NewBeers;
