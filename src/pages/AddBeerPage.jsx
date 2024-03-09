import React, { useState } from 'react'
import BeerService from '../service/BeerService';
import { useNavigate } from 'react-router-dom';

export default function AddBeerPage() {
  const navigateTo = useNavigate();
  const [ newBeer, setNewBeer ] = useState({
    name:"",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });

  const service = new BeerService();

  const handleSubmit = async (event) => {
    event.preventDefault()
    await service.createBeer(newBeer);

    setTimeout(()=> {
      setNewBeer({
        name:"",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      })
    }, 1)

    navigateTo("/beers");
  }

  const handleChange = (event) => {
    console.log({newBeer});
    setNewBeer((prevState) => ({...prevState, [event.target.name]: event.target.value}))
  }

  return (
    <form className="form-beer" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={newBeer.name} onChange={handleChange}/>

        <label>Tagline</label>
        <input type="text" name="tagline" value={newBeer.tagline} onChange={handleChange}/>

        <label>Description</label>
        <textarea type="text" name="description" value={newBeer.description} onChange={handleChange}/>

        <label>First Brewed</label>
        <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={handleChange}/>

        <label>Brewers Tips</label>
        <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={handleChange}/>

        <label>Attenuation Level</label>
        <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange}/>

        <label>Contributed By</label>
        <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleChange}/>

        <button className='button'>Add new</button>
    </form>
  )
}

