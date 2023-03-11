import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function NewBeer() {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuation, setAttenuation] = useState('')
    const [contributed, setContributed] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const body = {name, tagline, description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuation, contributed_by: contributed}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then(() => {
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setBrewersTips('')
            setAttenuation('')
            setContributed('')

            alert('Beer created!')
            navigate('/beers')
        })
   
    }

  return (
    <div className='newbeer'>

    <Navigation/>
    
    <h1>Add your brand new beer</h1>

    <form action="" onSubmit={handleSubmit} className="newform">
    <div className='oneinput'>
    <label htmlFor="" className='label'>
        Name
        <br/>
        <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </label>
    </div>
    <br/>

    <div className='oneinput'>
    <label htmlFor="" className='label'>
        Tagline
        <br/>
        <input className='input' type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
    </label>
    </div>
    <br/>

    <div className='oneinput'>
    <label htmlFor="" className='label'>
        Description
        <br/>
        <input className='input' type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
    </label>
    </div>
    <br/>

    <div className='oneinput'>
    <label htmlFor="" className='label'>
        First brewed
        <br/>
        <input className='input' type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
    </label>
    </div>
    <br/>

    <div className='oneinput'>
    <label htmlFor="" className='label'>
        Brewers tips
        <br/>
        <input className='input' type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)}/>
    </label>
    </div>
    <br/>

    <div className='oneinput'>
    <label htmlFor="" className='label'>
        Attenuation level
        <br/>
        <input className='input' type="number" value={attenuation} onChange={(e) => setAttenuation(e.target.value)}/>
    </label>
    </div>
    <br/>

    <div className='oneinput'>
    <label htmlFor="" className='label'>
        Contributed by
        <br/>
        <input className='input' type="text" value={contributed} onChange={(e) => setContributed(e.target.value)}/>
    </label>
    </div>
    <br/>
    
    <button>Add your beer!</button>



    </form>
    
    </div>
  )
}

export default NewBeer