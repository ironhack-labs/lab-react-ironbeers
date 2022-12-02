//import Header from "../components/Header";
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function NewBeer(){
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {name: name, tagline: tagline, description: description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy};
        
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
        .then((res)=>{
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel(0);
            setContributedBy("");

            navigate("/beers");
        })
        .catch(error=>console.log(error));
    }

    return(
      
        <>
            <Header />
            <h2>Add A New Beer</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input 
                    type="text"
                    name="name"
                    onChange={e=>setName(e.target.value)}
                    className="rounded"
                /><br/>
                <label>Tagline</label><br/>
                <input 
                    type="text"
                    name="tagline"
                    onChange={e=>setTagline(e.target.value)}
                    className="rounded"
                /><br/>
                <label>Description</label><br/>
                <input 
                    type="text"
                    name="description"
                    onChange={e=>setDescription(e.target.value)}
                    className="rounded"
                /><br/>
                <label>First Brewed</label><br/>
                <input 
                    type="text"
                    name="firstBrewed"
                    onChange={e=>setFirstBrewed(e.target.value)}
                    className="rounded"
                /><br/>
                <label>Brewers Tips</label><br/>
                <input 
                    type="text"
                    name="brewersTips"
                    onChange={e=>setBrewersTips(e.target.value)}
                    className="rounded"
                /><br/>
                <label>Attenuation Level</label><br/>
                <input 
                    type="number"
                    name="attenuationLevel"
                    onChange={e=>setAttenuationLevel(e.target.value)}
                    className="rounded"
                /><br/>
                <label>Contributed By</label><br/>
                <input 
                    type="text"
                    name="contributedBy"
                    onChange={e=>setContributedBy(e.target.value)}
                    className="rounded"
                /><br/>
                <br/>
                <button type="submit" className="bg-primary rounded">ADD NEW</button>
            </form>
        </>
    )
}

export default NewBeer;