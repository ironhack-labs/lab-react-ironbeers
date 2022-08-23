import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NewBeer({getBeers}) {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attentuation_level, setAttentuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTips = (e) => setBrewersTips(e.target.value)
    const handleAttentuationLevel = (e) => setAttentuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        //gather the values to create the project
        const requestBody = {name, tagline, description, first_brewed, brewers_tips, attentuation_level, contributed_by};
        //axios.post(`url`, information sent)
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, requestBody)
        .then(() => {
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setBrewersTips('')
            setAttentuationLevel(0)
            setContributedBy('')
            getBeers()
        })
        .catch((err) => console.log(err))
    }
  return (
    <div>
        <Link to='/'><img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Home" /></Link>
        <h3>Add Beer</h3>

<form onSubmit={handleSubmit}>
    <label htmlFor="title">Name</label>
        <input type="text" name='name' id='name' value={name} onChange={handleName} />

    <label htmlFor="title">Tagline</label>
        <input type="text" name='tagline' id='tagline' value={tagline} onChange={handleTagline} />

    <label htmlFor="description">Description</label>
        <input type="text" name='description' id='description' value={description} onChange={handleDescription} />

    <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name='firstBrewed' id='firstBrewed' value={first_brewed} onChange={handleFirstBrewed} />

    <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" name='brewersTips' id='brewersTips' value={brewers_tips} onChange={handleBrewersTips} />

    <label htmlFor="attentuation_level">Attentuation Level</label>
        <input type="text" name='attentuationLevel' id='attentuationLevel' value={attentuation_level} onChange={handleAttentuationLevel} />

    <label htmlFor="contributed_by">contributedBy</label>
        <input type="text" name='contributedBy' id='contributedBy' value={contributed_by} onChange={handleContributedBy} />

    <button type="submit">Add Project</button>
</form>
    </div>
  )
}

export default NewBeer