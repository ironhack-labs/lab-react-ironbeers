import {React, useState} from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewerTips, setBrewerTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleAttenuationLevel = (e) => setAttenuationLevel(Number(e.target.value));
    const handleContributedBy = (e) => setContributedBy(e.target.value);

  
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newBeer = { name, tagline, description, firstBrewed, brewerTips, attenuationLevel, contributedBy};

        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
            navigate('/beers');
            alert('Submitted with succes');
          } catch (error) {
            console.log(error);
          }
        };
  return (
    <div>
     <Header/>

     <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" value={description} onChange={handleDescription} />

        <label htmlFor="First-Brewed">First Brewed</label>
        <input type="text" name="firstBrewed" value={firstBrewed} onChange={handleFirstBrewed} />

        <label htmlFor="attenuationLevel">Tagline</label>
        <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={handleAttenuationLevel} />

        <label htmlFor="contributed-By">Contributed By</label>
        <input type="text" name="contributedBy" value={contributedBy} onChange={handleContributedBy} />

        <button type="submit">Create Beer</button>
      </form>
    
    </div>
  )
}

export default NewBeer