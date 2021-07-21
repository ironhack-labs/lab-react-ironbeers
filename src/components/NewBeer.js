import React , { useState }from 'react'
import axios from 'axios'
import NavBar from "./NavBar"

function NewBeer(){

    const initialFormState = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    const [formState, setFormState] = useState(initialFormState)

    function handleChange (event) {  
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    }

    function handleFormSubmit(event){
        event.preventDefault()
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = formState

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
        .then(setFormState(initialFormState))
        .catch(err=>console.log(err))
    }

    return (
        <div>
        <NavBar />
        <form onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formState.name} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <label>Tagline:</label>
          <input type="text" name="tagline" value={formState.tagline} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <label>Description:</label>
          <input type="text" name="description" value={formState.description} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <label>First Brewed:</label>
          <input type="text" name="first_brewed" value={formState.first_brewed} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <label>Brewers Tips:</label>
          <input type="text" name="brewers_tips" value={formState.brewers_tips} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" value={formState.attenuation_level} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <label>Contributed By:</label>
          <input type="text" name="contributed_by" value={formState.contributed_by} onChange={ e => handleChange(e)}/><br></br><br></br>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default NewBeer