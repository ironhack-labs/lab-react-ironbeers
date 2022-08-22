import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBeer({getBeers}) {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState('')

    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTips = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

    const newBeer = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy}

    axios.post(`https://ih-beers-api2.herokuapp.com/beers`, newBeer)
    .then(() => {
        getBeers();
    })
    .catch((err) => console.log(err))

    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel(0);
    setContributedBy('');

    navigate('/');
    };

  return (
    <div>
        <h3>CreateBeer</h3>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={handleName} />

            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={description} onChange={handleDescription} />

            <label htmlFor="firstBrewed">FirstBrewed</label>
            <input type="text" name="firstBrewed" value={firstBrewed} onChange={handleFirstBrewed} />

            <label htmlFor="brewersTips">BrewersTips</label>
            <input type="text" name="brewersTips" value={brewersTips} onChange={handleBrewersTips} />

            <label htmlFor="attenuationLevel">AttenuationLevel</label>
            <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={handleAttenuationLevel} />

            <label htmlFor="contributedBy">ContributedBy</label>
            <input type="text" name="contributedBy" value={contributedBy} onChange={handleContributedBy} />

            <button type='submit'>Create Beer</button>
        </form>
    </div>
  )
}

export default CreateBeer