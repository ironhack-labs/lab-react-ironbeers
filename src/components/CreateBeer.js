import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const CreateBeer = () => {
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
        axios.post(process.env.REACT_APP_API_BASE_URL + "/new", newBeer)
    }
    
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

    return(<>
            <h1>Add a new Beer!</h1>
            <form onSubmit={handleSubmit}>
               <label> Name<input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/> </label>
               <label>Tagline<input type="text" name="tagline" value={inputs.tagline || ""} onChange={handleChange}/></label>
               <label>description<input type="text" name="description" value={inputs.description || ""} onChange={handleChange}/></label> 
              <label>first brewed?<input type="text" name="first_brewed" value={inputs.first_brewed || ""} onChange={handleChange}/></label> 
               <label>Tips:<input type="text" name="brewers_tips" value={inputs.brewers_tips || ""} onChange={handleChange}/></label> 
               <label>Attenuation level <input type="number" name="attenuation_level" value={inputs.attenuation_level || 0} onChange={handleChange}/></label>
                <label>Contributed by:<input type="text" name="contributed_by" value={inputs.contributed_by || ""} onChange={handleChange}/></label>
                <input type="submit" />
            </form>

        </>
    )
}


export default CreateBeer