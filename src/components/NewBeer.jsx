import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import NavBar from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'


function AddBeer() {
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
  const handleBrewers_tips = (e) => setBrewers_tips(e.target.value);
  const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
  const handleContributed_by = (e) => setContributed_by(e.target.value);

  //navigate comes from the useNavigate hook
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //The body of the request NEEDS to be an object
      const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};

      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);

      setName('');
      setTagline('');
      setDescription('');
      setFirst_brewed('');
      setBrewers_tips('');
      setAttenuation_level(0);
      setContributed_by('')

      //redirect to the home page
      navigate('/');

      /* 
      .then based version
        axios.post('https://ironbnb-m3.herokuapp.com/apartments', body)
        .then(response => {
          console.log(response)
        }).catch(err => {
          console.log(err)
        })
      */

  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddApartmentPage">
            <Link to="/">
                <img src={NavBar} alt="" />
            </Link>
      <h3>Add New Beer</h3>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline:</label>
        <input type="text" value={tagline} onChange={handleTagline} />

        <label htmlFor="description">Description:</label>
        <input type="text" value={description} onChange={handleDescription} />

        <label htmlFor="first_brewed">First_brewed:</label>
        <input type="text" value={first_brewed} onChange={handleFirst_brewed} />

        <label htmlFor="brewers_tips">Brewers_tips:</label>
        <input type="text" value={brewers_tips} onChange={handleBrewers_tips} />

        <label htmlFor="attenuation_level">Attenuation_level:</label>
        <input type="text" value={attenuation_level} onChange={handleAttenuation_level} />

        <label htmlFor="contributed_by">Contributed_by:</label>
        <input type="text" value={contributed_by} onChange={handleContributed_by} />


        

        <button type="Submit">List Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;