import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL="https://ih-beers-api2.herokuapp.com/beers";
import { Card, Row} from "antd";
import "../App.css";

function AddBeerPage(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tagline, setTagline] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setattenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        console.log("Name:", name);
        console.log("Description:", description);
        console.log("Tagline:", tagline);
        console.log("BrewersTips:", brewersTips);
        console.log("AttenuationLevel:", attenuationLevel);
        console.log("ContributedBy:", contributedBy);
        e.preventDefault(); 
        
        if (!name || !description || !tagline || !brewersTips || !attenuationLevel || !contributedBy) {
            alert("Insert the beer info");
        }
        const requestBody = {name, description, tagline, brewersTips, attenuationLevel, contributedBy};
        axios.post(`${API_URL}/new`, requestBody).then(()=>{
            navigate("/beers") 
        }).catch(error=>{console.log(error)})
    }

    useEffect(() => {
    }, [])

    return(
        <Card id="add-beer">
            <form onSubmit={handleSubmit} id="new-beer">
                <Row id="beer-row">Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></Row>
                <Row id="beer-row">Description: <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/></Row>
                <Row id="beer-row">Tagline: <input type="text" name="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/></Row>
                <Row id="beer-row">Brewers Tips: <input type="text" name="brewersTips" value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)}/></Row>
                <Row id="beer-row">Attenuation Level: <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={(e)=>setattenuationLevel(e.target.value)}/></Row>
                <Row id="beer-row">Contributed by: <input type="text" name="contributedId" value={contributedBy} onChange={(e)=>setContributedBy(e.target.value)}/></Row>
                <button  id="beer-button" type="submit">Submit</button>
            </form>
        </Card>
    )
}

export default AddBeerPage;
