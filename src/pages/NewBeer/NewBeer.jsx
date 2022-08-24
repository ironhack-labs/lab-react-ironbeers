import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  "../Beers/Beers.css"

const NewBeer = () => {
  let navigate = useNavigate()
  const [inputs, setInputs] = useState({})

    const addBeer = () => {
        const newBeer = {
            name: inputs.name,
            tagline: inputs.tagline,
            description: inputs.description,
            first_brewed: inputs.first_brewed,
            brewers_tips: inputs.brewers_tips,
            attenuation_level: inputs.attenuation_level,
            contributed_by: inputs.contributed_by
        }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    }
    //event that prevents default, adds beers and navigates to all beers list
    const handleSubmit = (e) => {
        e.preventDefault()
        addBeer()
        navigate("/beers")
    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({...values, [name]: value}))
      }

    return(<div>
            <h1>Add a new Beer!</h1>
            <form onSubmit={handleSubmit} className="beers-input">
               <label> <b>Name: </b><input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/> </label>
               <label><b>Tagline: </b><input type="text" name="tagline" value={inputs.tagline || ""} onChange={handleChange}/></label>
               <label><b>Description: </b><input type="text" name="description" value={inputs.description || ""} onChange={handleChange}/></label> 
              <label><b>Brewing date: </b><input type="text" name="first_brewed" value={inputs.first_brewed || ""} onChange={handleChange}/></label> 
               <label><b>Brewer's tip: </b><input type="text" name="brewers_tips" value={inputs.brewers_tips || ""} onChange={handleChange}/></label> 
               <label><b>Attenuation level: </b><input type="number" name="attenuation_level" value={inputs.attenuation_level || 0} onChange={handleChange}/></label>
                <label><b>Contributed by: </b><input type="text" name="contributed_by" value={inputs.contributed_by || ""} onChange={handleChange}/></label>
                <input type="submit" />
            </form>

        </div>
    )
}


export default NewBeer 