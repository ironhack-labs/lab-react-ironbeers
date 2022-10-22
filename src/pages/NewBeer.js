import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function NewBeer() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');



  const updateName = e => setName(e.target.value)
  const updateTagline = e => setTagline(e.target.value)
  const updateDescription = e => setDescription(e.target.value)
  const updateFirstBrewed = e => setFirstBrewed(e.target.value)
  const updateBrewersTips = e => setBrewersTips(e.target.value)
  const updateAttenuationLevel = e => setAttenuationLevel(e.target.value)
  const updateContributedBy = e => setContributedBy(e.target.value)

  const submitForm = e => {
    e.preventDefault();

    const bodyObject = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel),
      contributed_by: contributedBy
    };

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', bodyObject)
      .then(res => {
        console.log(res.data);
        navigate('/')
      })
      .catch(err => console.log(err))

  };

  return (
    <div>
        <Navbar />
    <form onSubmit={submitForm}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={updateName}/>
      </div>
      <div className="form-container">
        <label>Tagline</label>
        <input type="text" value={tagline} onChange={updateTagline}/>
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={updateDescription}/>
      </div>
      <div className="form-container">
        <label>First Brewed</label>
        <input type="text" value={firstBrewed} onChange={updateFirstBrewed}/>
      </div>
      <div>
        <label>Brewers Tips</label>
        <input type="text" value={brewersTips} onChange={updateBrewersTips}/>
      </div>
      <div className="form-container">
        <label>Attenuation Level</label>
        <input type="number" value={attenuationLevel} onChange={updateAttenuationLevel}/>
      </div>
      <div className="form-container">
        <label>Contributed By</label>
        <input type="text" value={contributedBy} onChange={updateContributedBy}/>
      </div>

      <div>
        <button>Create New Beer</button>
      </div>
    </form>
    </div>
  );
}

export default NewBeer;

