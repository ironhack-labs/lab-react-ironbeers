import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL="https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tagline, setTagline] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setattenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const requestBody = {name, description, tagline, brewersTips, attenuationLevel, contributedBy, image};
        axios.post(`${API_URL}/new`, requestBody).then(()=>{
            navigate("/beers") 
        }).catch(error=>{console.log(error)})
    }

    useEffect(() => {
    }, [])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></label>
                <label>Description: <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/></label>
                <label>tagline: <input type="text" name="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/></label>
                <label>brewersTips: <input type="text" name="brewersTips" value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)}/></label>
                <label>attenuationLevel: <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={(e)=>setattenuationLevel(e.target.value)}/></label>
                <label>contributed_by: <input type="text" name="contributedId" value={contributedBy} onChange={(e)=>setContributedBy(e.target.value)}/></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
