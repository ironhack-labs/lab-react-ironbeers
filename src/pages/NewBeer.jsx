import React, {useState} from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

    const navigate = useNavigate()


    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTips = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then((response) => {
            console.log(response);
            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationLevel(0);
            setContributedBy('');

            navigate('/beers')
        })
    }



  return (
    <>
    <Link to={`/`}>
        <header>
            <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="return-home" className='return-home'/>
        </header>
    </Link>



    <div className='add-new-beer'>
        <h3>Add New Beer</h3>
        <form onSubmit={handleSubmit} className='add-new-beer-form'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleName} />

            <label htmlFor="tagline">Tagline</label>
            <input type="text" name="tagline" id="tagline" value={tagline} onChange={handleTagline} />

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={handleDescription}></textarea>

            <label htmlFor="firstBrewed">First Brewed</label>
            <input type="text" name="firstBrewed" id="firstBrewed" value={first_brewed} onChange={handleFirstBrewed} />

            <label htmlFor="brewersTips">Brewers Tips</label>
            <input type="text" name="brewersTips" id="brewersTips" value={brewers_tips} onChange={handleBrewersTips} />

            <label htmlFor="attenuationLevel">Attenuation Level</label>
            <input type="number" name="attenuationLevel" id="attenuationLevel" value={attenuation_level} onChange={handleAttenuationLevel} />

            <label htmlFor="contributedBy">Contributed By</label>
            <input type="text" name="contributedBy" id="contributedBy" value={contributed_by} onChange={handleContributedBy} />

            <button type="submit">Add New</button>
        </form>
    </div>
    </>
  )
}

export default NewBeer