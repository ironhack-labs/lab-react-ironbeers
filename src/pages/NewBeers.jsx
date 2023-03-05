import {useState} from 'react';
import axios from 'axios';
import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import Navbar from '../components/NavBar';


function NewBeer() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState('');


    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
    const handleBrewers_tips = (e) => setBrewers_tips(e.target.value);;
    const handleAttenuation_level = (e) => setAttenuation_level(Number(e.target.value));
    const handleContributed_by = (e) => setContributed_by(e.target.value);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

    
      const NewBeer = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: first_brewed,
        brewers_tips: brewers_tips,
        attenuation_level: attenuation_level,
        contributed_by: contributed_by,
      }

      try {
          
          await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',
          NewBeer);

          alert('New Beer Added');

       
          navigate('/');

      } catch (error) {
          console.log(error)
      }


  };



      return (
        <div className='NewBeer'>
          <Navbar/>
            <h3>Add New Beer</h3>


            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" name="Name" value={name} onChange={handleName} />

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

                <label htmlFor="description">Description</label>
                <input type="text" name="Description" value={description} onChange={handleDescription} />

                <label htmlFor="first_brewed">First_brewed</label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={handleFirst_brewed} />

                <label htmlFor="brewers_tips">Brewers_tips</label>
                <input type="text" name="Brewers_tips" value={brewers_tips} onChange={handleBrewers_tips} />

                <label htmlFor="attenuation_level">Attenuation_level</label>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleAttenuation_level} />

                <label htmlFor="contributed_by">Contributed_by</label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={handleContributed_by} />



                <button type='submit'>Add Beer</button>

            </form>

        </div>
      );
    }

    export default NewBeer