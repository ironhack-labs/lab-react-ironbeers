import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function AddBeerPage() {

    const [name, setName] = useState();
    const [tagline, setTagline] = useState();
    const [description, setDescription] = useState();
    const [first_brewed, setFirst_Brewed] = useState();
    const [brewers_tips, setBrewers_Tips] = useState();
    const [attenuation_level, setAttenuation_Level] = useState();
    const [contributed_by, setContributed_By] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const requestBody = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
        axios.post(`${API_URL}/new`, requestBody).then(()=>{
            navigate("/")
        })
        .catch((error) => (console.log(error)))
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label> Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></label> <br />
                <label> Tagline: <input type="text" name="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/></label> <br />
                <label> Description: <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/></label> <br />
                <label> First Brewed: <input type="text" name="first_brewed" value={first_brewed} onChange={(e)=>setFirst_Brewed(e.target.value)}/></label> <br />
                <label> Brewer's Tips: <input type="text" name="brewers_tips" value={brewers_tips} onChange={(e)=>setBrewers_Tips(e.target.value)}/></label> <br />
                <label> Attenuation Level: <input type="number" name="attenuation_level" value={attenuation_level} onChange={(e)=>setAttenuation_Level(e.target.value)}/></label> <br />
                <label> Contributed By:: <input type="text" name="contributed_by" value={contributed_by} onChange={(e)=>setContributed_By(e.target.value)}/></label> <br />
                <button type="submit">Add Beer</button>
            </form>
             <Link to="/" className="back-button"> Back </Link>
        </div>
    )
    
}

export default AddBeerPage;
