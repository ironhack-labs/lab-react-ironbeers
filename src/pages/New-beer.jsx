import Header from "../components/Header";
import { useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function NewBeer(){
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips, setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState("")

    const handleNameInput = event => setName(event.target.value)
    const handleTaglineInput = event => setTagline(event.target.value)
    const handleDescriptionInput = event => setDescription(event.target.value)
    const handleFirst_brewedInput = event => setFirst_brewed(event.target.value)
    const handleBrewers_tipsInput = event => setBrewers_tips(event.target.value)
    const handleAttenuation_levelInput = event => setAttenuation_level(event.target.value)
    const handleContributed_byInput = event => setContributed_by(event.target.value)

    const handleSubmit = (event) =>{
        event.preventDefault()

        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }

        console.log(newBeer)

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        .then(res=>{
            console.log("res:",res)
            setName("")
            setTagline("")
            setDescription("")
            setFirst_brewed("")
            setBrewers_tips("")
            setAttenuation_level("")
            setContributed_by("")
            navigate('/')
        })
        .catch(err=>console.log(err))

    }

    return (
        <>
             <Header />

             <div>
                 <form onSubmit={handleSubmit}>
                     <label htmlFor="">Name</label>
                     <input type="text" value={name} onChange={handleNameInput} />

                     <label htmlFor="">Tagline</label>
                     <input type="text" value={tagline} onChange={handleTaglineInput} />

                     <label htmlFor="">Description</label>
                     <input type="text" value={description} onChange={handleDescriptionInput} />

                     <label htmlFor="">First Brewed</label>
                     <input type="text" value={first_brewed} onChange={handleFirst_brewedInput} />

                     <label htmlFor="">Brewers Tips</label>
                     <input type="text" value={brewers_tips} onChange={handleBrewers_tipsInput} />

                     <label htmlFor="">Attenuation Level</label>
                     <input type="number" value={attenuation_level} onChange={handleAttenuation_levelInput} />

                     <label htmlFor="">Contributed By</label>
                     <input type="text" value={contributed_by} onChange={handleContributed_byInput} />

                     <button>ADD NEW</button>
                 </form>

             </div>

        </>
    )
}

export default NewBeer