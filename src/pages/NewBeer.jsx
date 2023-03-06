import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewBeer() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tagline, setTagline] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewerTips, setBrewerTips] = useState('');
    const [attLevel, setAttLevel] = useState('');
    const [contribut, setContribut] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleBrewerTips = (e) => setBrewerTips(e.target.value);
    const handleAttLevel = (e) => setAttLevel(e.target.value);
    const handleContribut = (e) => setContribut(e.target.value);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {name, description, tagline, firstBrewed, brewerTips, attLevel, contribut}

        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
            navigate('/beers')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div>
        <h1>Create a beer!</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' value={name} onChange={handleName}/>
            <label htmlFor="description">Description</label>
            <input type="text" name='description' id='description' value={description} onChange={handleDescription}/>
            <label htmlFor="tagline">Tagline</label>
            <input type="text" tagline='tagline' id='tagline' value={tagline} onChange={handleTagline}/>
            <label htmlFor="firstBrewed">First Brewed</label>
            <input type="text" name='firstBrewed' id='firstBrewed' value={firstBrewed} onChange={handleFirstBrewed}/>
            <label htmlFor="brewerTips">Brewer Tips</label>
            <input type="text" name='brewerTips' id='brewerTips' value={brewerTips} onChange={handleBrewerTips}/>
            <label htmlFor="attLevel">Attenuation Level</label>
            <input type="number" name='attLevel' id='attLevel' value={attLevel} onChange={handleAttLevel}/>
            <label htmlFor="contribut">Contributor</label>
            <input type="text" name='contribut' id='contribut' value={contribut} onChange={handleContribut}/>

            <button type="submit">Create beer!</button>

        </form>
    </div>
  )
}

export default NewBeer