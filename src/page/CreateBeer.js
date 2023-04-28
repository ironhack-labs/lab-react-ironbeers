import { useEffect, useState } from "react"
import Header from "../components/Header"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateBeer = () => {

    const [newBeer, setNewBeer] = useState([])

    const navigate = useNavigate()
  

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewedTips, setBrewedTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contribution, setContribution] = useState("")



    const handleName = (e) => setName(e.target.value) 
    const handleTagline = (e) => setTagline(e.target.value) 
    const handleDescription = (e) => setDescription(e.target.value) 
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value) 
    const handleBrewedTips = (e) => setBrewedTips(e.target.value) 
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value) 
    const handleContribution = (e) => setContribution(e.target.value)

    
const handleSubmit = (e) => {

    e.preventDefault()

    const newBeer = {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewedTips,
        attenuation_level: attenuationLevel,
        contributed_by: contribution
    }

    console.log("A new beer has been created", newBeer)
    setNewBeer(newBeer)
  

    

    const url = "https://ih-beers-api2.herokuapp.com/beers/new"
    
    
        axios.post(url, newBeer)
        .then(res => {
            navigate("/beers")
        })
}



  return (

    <div>
    <Header />
    <div>

     <form onSubmit={handleSubmit}>

        <label>Name
            <input type="text" onChange={handleName} value={name}/>
        </label>

        <label>Tagline
            <input type="text" onChange={handleTagline} value={tagline}/>
        </label>

        <label>Description
            <input type="text" onChange={handleDescription} value={description}/>
        </label>

        <label>First Brewed
            <input type="text" onChange={handleFirstBrewed} value={firstBrewed}/>
        </label>

        <label> Brewers Tips
            <input type="text" onChange={handleBrewedTips} value={brewedTips}/>
        </label>

        <label> Attenuation Level
            <input type="number" onChange={handleAttenuationLevel} value={attenuationLevel}/>
        </label>

        <label> Contributed By
            <input type="text" onChange={handleContribution} value={contribution}/>
        </label>

        <button type="submit">Add a new beer</button>

    </form>
    </div>
    </div>
  )
}

export default CreateBeer