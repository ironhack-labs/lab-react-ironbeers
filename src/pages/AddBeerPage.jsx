import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddBeerPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then(() => {
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel(0);
        setContributedBy('');
        navigate('/beers');
      });
  };

  return (
    <div>
      <h3>Add New Beer</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </label>

        <label>
          First Brewed
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={first_brewed}
          />
        </label>
        <label>
          Brewer's Tips
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewers_tips}
          />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuation_level}
          />
        </label>
        <label>
          Contributed By
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributed_by}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
