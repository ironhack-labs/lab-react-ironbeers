import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function CreateBeer(props) {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description , setDescription ] = useState("");
    const [brewed, setBrewed] = useState("");
    const [tips, setTips] = useState("");
    const [attenuation , setAttenuation] = useState(0);
    const [contributed, setContributed] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            brewed: brewed,
            tips: tips,
            attenuation: attenuation,
            contributed: contributed
        }

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        .then(response => {
            console.log(response.data)

            // redirects to beers page
            navigate("/beers");

            // clears form
            setName("");
            setTagline("");
            setDescription("");
            setBrewed("");
            setTips("");
            setAttenuation(0);
            setContributed("");
        })
        .catch(e => {console.log("error fetching details", e)})
    }

    return (
    <div className="CreateBeer">
    <form onSubmit={handleSubmit}>
        <h1>Create a new beer</h1>
        <input type="text" name="name" value={name} placeholder="name" onChange={(e) => {setName(e.target.value)} }/>
        <input type="text" name="tagline" value={tagline} placeholder="tagline" onChange={(e) => {setTagline(e.target.value)} }/>
        <input type="text" name="description" value={description} placeholder="description" onChange={(e) => {setDescription(e.target.value)} }/>
        <input type="text" name="brewed" value={brewed} placeholder="brewed" onChange={(e) => {setBrewed(e.target.value)} }/>
        <input type="text" name="tips" value={tips} placeholder="tips" onChange={(e) => {setTips(e.target.value)} }/>
        <input type="number" name="attenuation" value={attenuation} placeholder="attenuation" onChange={(e) => {setAttenuation(e.target.value)} }/>
        <input type="text" name="contributed" value={contributed} placeholder="contributed" onChange={(e) => {setContributed(e.target.value)} }/>
        <button>Add beer</button>
    </form>
    </div>
    )
}

export default CreateBeer