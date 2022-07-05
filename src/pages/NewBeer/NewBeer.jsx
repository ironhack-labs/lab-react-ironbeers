
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './NewBeer.css';

const NewBeer = ({ apiUrl }) => {
  const [values, setValues] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  })

  const handleChange = (e) =>{
    // setValues(({ ...values, [e.target.name]: e.target.value }))
    const {name, value} = e.target;
    setValues(({...values, [name]: value }))
    };

  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser to reloada/refresh page
   
    try {
        await axios.post(apiUrl.concat('/new'), values);
        setValues({
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        })
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <div className='form-box'> 
    <h3></h3>
    <form onSubmit={handleSubmit}>
        <div className = "field">
            <label htmlFor="name">Name:</label>
            <textarea  className='smaller-box' onChange={handleChange} type="text" name="name" value={values.name} />
        </div>
        <div className = "field">
            <label htmlFor="tagline">Tagline:</label>
            <textarea className='smaller-box' onChange={handleChange} type="text" name="tagline" value={values.tagline} />
        </div>
        <div className = "field ">
            <label htmlFor="description">Description:</label>
            <textarea className='description' onChange={handleChange} type="text" name="description" value={values.description} />
        </div>
        <div className = "field">
            <label htmlFor="first_brewed">First brewed on:</label>
            <input onChange={handleChange} type="date" name="first_brewed" value={values.first_brewed} />
        </div>
        <div  className = "field wider">
            <label htmlFor="brewers_tips">Brewers tips: </label>
            <textarea className='smaller-box' onChange={handleChange} type="text" name="brewers_tips" value={values.brewers_tips} />
        </div>
        <div  className = "field">
            <label htmlFor="attenuation_level">Attenuation level: </label>
            <textarea className='smaller-box' onChange={handleChange} type="text" name="attenuation_level" value={values.attenuation_level} />
        </div>
        <div  className = "field">
            <label htmlFor="contributed_by">Contributed by: </label>
            <textarea className='smaller-box' onChange={handleChange} type="text" name="contributed_by" value={values.contributed_by} />
        </div>
        <div className='button-container'>
        <button type='submit' className="submitBtn" >Add new beer</button>
        </div>
    </form>

    </div>
  )
}

export default NewBeer