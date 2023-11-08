import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL="https://ih-beers-api2.herokuapp.com/beers"

function AddBeerPage() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [attenuation, setAttenuation]= useState("")
    const [tagline, setTagline] = useState("")
    const [brewed, setBrewed] = useState("")
    const [tips, setTips]= useState("")
    const [contributed, setContributed]= useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

    const newBeer= {name, tagline, description, brewed, attenuation, contributed, tips}

    axios.post(`${API_URL}/new`, newBeer)
    .then(()=>{
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
          First Brewed: <input type="text" name="brewed" value={brewed} onChange={(e)=>setBrewed(e.target.value)}/>
        </label>
        <label >
        Brewer's Tips: <input type="text" name="tips" value={tips} onChange={(e)=>setTips(e.target.value)}/>
        </label>
        <label >
        Attenuation Level: <input type="text" name="attenuation" value={attenuation} onChange={(e)=>setAttenuation(e.target.value)}/>
        </label>
        <label >
        Contributed by: <input type="text" name="contributed" value={contributed} onChange={(e)=>setContributed(e.target.value)}/>
        </label>
        <button type="submit">Add New Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;