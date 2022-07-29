import {useState} from "react"
import {NavLink, useNavigate} from "react-router-dom"
import axios from "axios"

export function NewBeer(props){
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips, setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState("")

    const postNewBeer = () => {
        axios.post(process.env.REACT_APP_URL + "/new", {
            name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by
        })
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
    }

    return (
        <div>
            <header>
                <NavLink to="/" className="link">Home</NavLink>
                <h2>New Beer</h2>
            </header>
            <div>
               <label>Name: <input type="text" value={name} onChange={({target}) => setName(target.value)} /></label>
               <label>Tagline: <input type="text" value={tagline} onChange={({target}) => setTagline(target.value)} /></label>
               <label>Description: <input type="text" value={description} onChange={({target}) => setDescription(target.value)} /></label>
               <label>First brewed: <input type="text" value={first_brewed} onChange={({target}) => setFirst_brewed(target.value)} /></label>
               <label>Brewers tips: <input type="text" value={brewers_tips} onChange={({target}) => setBrewers_tips(target.value)} /></label>
               <label>Attenuation level: <input type="number" value={attenuation_level} onChange={({target}) => setAttenuation_level(target.value)} /></label>
               <label>Contributed by: <input type="text" value={contributed_by} onChange={({target}) => setContributed_by(target.value)} /></label>
                <button type="button" onClick={postNewBeer}>Create</button>
            </div>
        </div>
    )
}