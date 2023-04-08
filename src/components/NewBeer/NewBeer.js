import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function NewBeer({ addBeer }) {
  const [beer, setBeer] = useState('');
  const navigate = useNavigate()

  const handleChange = (ev) => {
    const key = ev.target.id
    const value = ev.target.value

    setBeer({
      ...beer,
      [key]: value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addBeer(beer)
    navigate('/')
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className='d-flex flex-column p-3'>
      
        <label>Name</label>
        <input className='mb-3' value={beer.name} type="text" onChange={handleChange}  id='name' name='name' style={{borderRadius:'10px'}} />

        <label>Tagline</label>
        <input className='mb-3' value={beer.tagline} type="text" onChange={handleChange} id='Tagline' name='Tagline' style={{borderRadius:'10px'}} />

        <label>Description</label>
        <input className='mb-3' value={beer.description} type="text" onChange={handleChange} id='description' name='description' style={{borderRadius:'10px'}} />

        <label>First Brewed</label>
        <input className='mb-3' value={beer.firstBrewed} type="text" onChange={handleChange} id='firstBrewed' name='firstBrewed' style={{borderRadius:'10px'}} />

        <label>Brewers Tips</label>
        <input className='mb-3' value={beer.BrewersTips} type="text" onChange={handleChange} id='brewersTips' name='brewersTips' style={{borderRadius:'10px'}} />

        <label>Attenuation_level</label>
        <input className='mb-3' value={beer.AttenuationLevel} type="number" onChange={handleChange} id='AttenuationLevel' name='AttenuationLevel' style={{borderRadius:'10px'}} />

        <label>contributed_by</label>
        <input className='mb-3' value={beer.contributedBy} type="text" onChange={handleChange} id='ContributedBy'  name='ContributedBy' style={{borderRadius:'10px'}} />

        <button className='mt-2 btn btn-primary' type="submit">Add New</button>
      </form>
    </>
  )
}

export default NewBeer