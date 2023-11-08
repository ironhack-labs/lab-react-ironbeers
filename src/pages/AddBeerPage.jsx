import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BeersAPI = "https://ih-beers-api2.herokuapp.com/beers"

function AddBeerPage() {

   const [name, setName] = useState("");
   const [tagline, setTagline] = useState("");
   const [description, setDescription] = useState("");
   const [first_Brewed, setFirst_Brewed] = useState("");
   const [brewers_Tips, setBrewers_Tips] = useState("");
   const [attenuation_Level, setAttenuation_Level] = useState("");
   const [contribute, setContribute] = useState("");

   const navigate = useNavigate();
    const handleSubmit = (e) =>{
        
        e.preventDefault()

        const requestBody = {name, tagline, description, first_Brewed, brewers_Tips, attenuation_Level, contribute};
        
        axios.post(`${BeersAPI}/new`, requestBody).then(()=>{

            navigate("/");
    
        })
        .catch((error)=> console.log(error));
    
        }

    return(
            <div>
                <form onSubmit={handleSubmit} className="form">
                    <label> Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/></label> <br />
                    <label> Tagline: <input type="text" name="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/></label> <br />
                    <label> Description: <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/></label> <br />
                    <label> First Brewed: <input type="text" name="first_brewed" value={first_Brewed} onChange={(e)=>setFirst_Brewed(e.target.value)}/></label> <br />
                    <label> Brewer's Tips: <input type="text" name="brewers_tips" value={brewers_Tips} onChange={(e)=>setBrewers_Tips(e.target.value)}/></label> <br />
                    <label> Attenuation Level: <input type="number" name="attenuation_level" value={attenuation_Level} onChange={(e)=>setAttenuation_Level(e.target.value)}/></label> <br />
                    <label> Contributed By:: <input type="text" name="contributed_by" value={contribute} onChange={(e)=>setContribute(e.target.value)}/></label> <br />
                    <button type="submit">Add Beer</button>
                </form>
                 <Link to="/" className="back-button"> Back </Link>
            </div>
        )
}

export default AddBeerPage;
