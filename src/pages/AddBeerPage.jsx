import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const API_URL="https://ih-beers-api2.herokuapp.com/beers"    

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [attenuation_level, setAttenuationLevel]= useState("")
    const [tagline, setTagline] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips]= useState("")
    const [contributed_by, setContributedBy]= useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

        const newBeer= {name, tagline, description, first_brewed, attenuation_level, contributed_by, brewers_tips}

        axios.post(`${API_URL}/new`, newBeer).then(()=>{
            navigate("/beers")
        })
        .catch((error)=> console.log(error));
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label>
          Tagline: <input type="text" name="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
        </label>
        <label>
          Description: <textarea type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </label>
        <label>
          First Brewed: <input type="text" name="first_brewed" value={first_brewed} onChange={(e)=>setFirstBrewed(e.target.value)}/>
        </label>
        <label >
        Brewer's Tips: <input type="text" name="brewers_tips" value={brewers_tips} onChange={(e)=>setBrewersTips(e.target.value)}/>
        </label>
        <label >
        Attenuation Level: <input type="text" name="attenuation_level" value={attenuation_level} onChange={(e)=>setAttenuationLevel(e.target.value)}/>
        </label>
        <label >
        Contributed by: <input type="text" name="contributed_by" value={contributed_by} onChange={(e)=>setContributedBy(e.target.value)}/>
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
