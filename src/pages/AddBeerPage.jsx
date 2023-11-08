import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
    
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_Brewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState("");
    const [contributed_by, setContributedBy] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        /* when submitted, the default action of the form is to refresh the page and we don't want that. */
        e.preventDefault();

        // This creates a "box" to be delivered to the API at the moment the post request is done.
        const requestBody = {name, tagline, description, firstBrewed, brewerTips, attenuationLevel, contributedBy};

        // POST request means that the user is going to submit/save stuff to the API
        axios.post(`${API_URL}/new-beer`, requestBody).then(()=>{
            // Once the project is created, redirect the user (navigate) to Project List Page
            navigate("/new-beer");
        })
        .catch((error)=> console.log(error));
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name<input type="text" name="name" value={name} 
                onChange={(e)=> setName(e.target.value)}/></label>
                <label>Tagline<input type="text" name="tagline" value={tagline} 
                onChange={(e)=> setTagline(e.target.value)}/></label>
                <label>Description<textarea type="text" name="description" value={description} 
                onChange={(e)=> setDescription(e.target.value)}/></label>
                <label>First Brewed<input type="text" name="first_brewed" value={first_brewed} 
                onChange={(e)=> setFirst_Brewed(e.target.value)}/></label>
                <label>Brewer's Tips<input type="text" name="brewers_tips" value={brewers_tips} 
                onChange={(e)=> setBrewersTips(e.target.value)}/></label>
                <label>Attenuation Level<input type="number" name="attenuation_level" value={attenuation_level} 
                onChange={(e)=> setAttenuationLevel(e.target.value)}/></label>
                <label>Contributed By<input type="text" name="contributed" value={contributed_by} 
                onChange={(e)=> setContributedBy(e.target.value)}/></label>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
