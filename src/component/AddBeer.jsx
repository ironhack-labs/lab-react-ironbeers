import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewer_tips, setBrewerTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTips = (e) => setBrewerTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewer_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
      .then((response) => {
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewerTips('');
        setAttenuationLevel(0);
        setContributedBy('');
        navigate('/beers');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddNewBeerPage">
      <h3>Add New Beer</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="firstBrewed">First brewed: </label>
        <input
          type="text"
          name="firstBrewed"
          value={first_brewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="brewerTips">Brewer tips: </label>
        <input
          type="text"
          name="brewerTips"
          value={brewer_tips}
          onChange={handleBrewerTips}
        />

        <label htmlFor="attenuationLevel">Attenuation level: </label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuation_level}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedBy">Contributed by: </label>
        <input
          type="text"
          name="contributedBy"
          value={contributed_by}
          onChange={handleContributedBy}
        />
        <br />
        <button className="button selected">Add New Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;
