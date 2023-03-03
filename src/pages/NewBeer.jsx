import {useState} from 'react';
import axios from 'axios';
import React from 'react';
//this useNavigate hook is used to redirect the user to another page
import {useNavigate} from 'react-router-dom';


function NewBeer() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState('');


    //handler fcuntions
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
  
      //we need to do pricePerDay because that's how it's written on the API, so, if we want to give it a new name, in this case price, we need to make the following change. pricePerDay: price
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
          //we need to past the API url!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! API Post
          await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',
          NewBeer);

          alert('New Beer Added');
          
          //so, after we create it, we redirect to, for example, home page, using navigate:
          navigate('/');
          
      } catch (error) {
          console.log(error)
      }


  };


  
      return (
        <div className='NewBeer'>
    
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
    


                <button type='submit'>Create apartment</button>
    
            </form>
    
        </div>
      );
    }
    
    export default NewBeer