import axios from "axios"
import { useState } from "react";
import Header from "../../Components/Header"
import { useNavigate } from "react-router-dom";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new"

export default function NewBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState('');
    const [contributed_by, setContributed_by] = useState('');

    const navigate = useNavigate()

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const taglineHandler = (event) => {
        setTagline(event.target.value)
    }
    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }
    const first_brewedHandler = (event) => {
        setFirst_brewed(event.target.value)
    }
    const brewers_tipsHandler = (event) => {
        setBrewers_tips(event.target.value)
    }
    const attenuation_levelHandler = (event) => {
        setAttenuation_level(event.target.value)
    }
    const contributed_byHandler = (event) => {
        setContributed_by(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
 
        const newBeer =  {
             name: name,
             tagline: tagline,
             description: description,
             first_brewed: first_brewed,
             brewers_tips: brewers_tips,
             attenuation_level: attenuation_level,
             contributed_by: contributed_by,
        }
 
        const postApi = async () => {
           try {
              await axios.post(apiURL, newBeer)
              navigate("/")
           } catch (error) {
              console.log(error)
           }
        }
 
        postApi()
        setName("")
        setTagline("")
        setFirst_brewed("")
        setDescription("")
        setBrewers_tips("")
        setAttenuation_level("")
        setContributed_by("")
     }
 
  return (
    <div>
        <Header/>

        <form onSubmit={submitHandler}>
        <label>Name</label>
             <input type="text" name="name" value={name} onChange={nameHandler} />
             <br></br>
             <label>Tag line</label>
             <input type="text" name="tagline" value={tagline} onChange={taglineHandler} />
             <br></br>
             <label>Description</label>
             <input type="text" name="description" value={description} onChange={descriptionHandler} />
             <br></br>
             <label>First brewed</label>
             <input type="text" name="first_brewed" value={first_brewed} onChange={first_brewedHandler} />
             <br></br>
             <label>Brewers Tips</label>
             <input type="text" name="brewers_tips" value={brewers_tips} onChange={brewers_tipsHandler} />
             <br></br>
             <label>Attenuation Level</label>
             <input type="number" name="attenuation_level" value={attenuation_level} onChange={attenuation_levelHandler} />
             <br></br>
             <label>Contributed By</label>
             <input type="text" name="contributed_by" value={contributed_by} onChange={contributed_byHandler} />
             <br></br>
             <button type="submit">Add New Beer</button>
        </form>
    </div>
  )
}