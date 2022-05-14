import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [brewed, setBrewed] = useState("");
    const [tips, setTips] = useState("");
    const [attenuation, setAttenuation] = useState(0);
    const [contributor, setContributor] = useState("");

    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: brewed,
            brewers_tips: tips,
            attenuation_level: attenuation,
            contributed_by: contributor
        }

        axios.post(baseUrl+"/new", newBeer)
        .then(response => {
            console.log(response.data);
            // reset state
            setName("")
            setTagline("")
            setDescription("")
            setBrewed("")
            setTips("")
            setAttenuation(0)
            setContributor("")
            // navigate to beers list
            navigate("/beers")
        })
        .catch(e => {console.log("Error getting data from API: ", e)})

    }

    return (
        <div>
            <Link to="/">HOME</Link>
            <section>
                <form onSubmit={handleSubmit} >
                    <input type="text"value={name} onChange={e=>{setName(e.target.value)}} name="name" placeholder="Name" /><br />
                    <input type="text"value={tagline} onChange={e=>{setTagline(e.target.value)}} name="tagline" placeholder="Tag" /><br />
                    <input type="text"value={description} onChange={e=>{setDescription(e.target.value)}} name="description" placeholder="Description" /><br />
                    <input type="text"value={brewed} onChange={e=>{setBrewed(e.target.value)}} name="first_brewed" placeholder="First brewed" /><br />
                    <input type="text"value={tips} onChange={e=>{setTips(e.target.value)}} name="brewers_tips" placeholder="Brewers tips" /><br />
                    <input type="number"value={attenuation} onChange={e=>{setAttenuation(e.target.value)}} name="attenuation_level" placeholder="Attenuation level" /><br />
                    <input type="text"value={contributor} onChange={e=>{setContributor(e.target.value)}} name="contributed_by" placeholder="Contributor" /><br />
                    <button>CREATE</button>
                </form>
            </section>
        </div>
    )
}