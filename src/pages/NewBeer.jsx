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
    <div>

    <Navigation/>
    
    <h1>New Beer</h1>

    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="">
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </label>

    <label htmlFor="">
        Tagline
        <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
    </label>

    <label htmlFor="">
        Description
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
    </label>

    <label htmlFor="">
        First brewed
        <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
    </label>

    <label htmlFor="">
        Brewers tips
        <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)}/>
    </label>

    <label htmlFor="">
        Attenuation level
        <input type="number" value={attenuation} onChange={(e) => setAttenuation(e.target.value)}/>
    </label>

    <label htmlFor="">
        Contributed by
        <input type="text" value={contributed} onChange={(e) => setContributed(e.target.value)}/>
    </label>
    <button>Add your beer!</button>



    </form>
    
    </div>
  )
}

export default NewBeer