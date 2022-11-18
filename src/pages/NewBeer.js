import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar"

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/new"

function NewBeer() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attentuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

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

    const firstBrewedHandler = (event) => {
        setFirstBrewed(event.target.value)
    }

    const brewersTipsHandler = (event) => {
        setBrewersTips(event.target.value)
    }

    const attentuationLevelHandler = (event) => {
        setAttenuationLevel(event.target.value)
    }

    const contributedByHandler = (event) => {
        setContributedBy(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attentuation_level: attentuation_level,
            contributed_by: contributed_by
        }

        console.log(newBeer)
        const newApi = async () => {
            try {
                const res = await axios.post(apiEndpoint, newBeer)
                console.log(res)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
        newApi()

        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel(0)
        setContributedBy("")
    }



    return (
        <div>
            <NavBar/>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={nameHandler} />
                <br></br>
                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={taglineHandler} />
                <br></br>
                <label>Descrption</label>
                <input type="text" name="description" value={description} onChange={descriptionHandler} />
                <br></br>
                <label>First brewed</label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={firstBrewedHandler} />
                <br></br>
                <label>Brewers tips</label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={brewersTipsHandler} />
                <br></br>
                <label>Attentuation level</label>
                <input type="number" name="attentuation_level" value={attentuation_level} onChange={attentuationLevelHandler} />
                <br></br>
                <label>Contributed by</label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={contributedByHandler} />
                <br></br>
                <button type="submit">ADD NEW</button>
            </form>
        </div>
    )
}
export default NewBeer
