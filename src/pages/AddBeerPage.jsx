import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const navigate = useNavigate()

 const [name, setName] = useState("")
 const [tagline, setTagline] = useState("")
 const [description, setDescription] = useState("")
 const [first_brewed, setFirstBrewed] = useState("")
 const [brewers_tips, setBrewersTip] = useState("")
 const [attenuation_level, setAttenuationLevel] = useState(0)
 const [contributed_by, setContributedBy] = useState("")

 const handleSubmit = (e) => {
e.preventDefault()

      const reqBody = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
      }

      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", reqBody) 
      .then((res) => {
        console.log("beer added")
        navigate("/beers")
        
      })
      .catch((error) => {
        console.log("error: ", error)
      })

 
  }

  
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>
            Name:
          <input name="name" type="text" value={name} onChange={(e)=> {setName(e.target.value)}}/>
          <br/>
        </label>

        <label>
        Tagline:
        <input name="tagline" type="text"value={tagline} onChange={(e)=> {setTagline(e.target.value)}}/>
        <br/>

        </label>

        <label>
        Description:
        <textarea name="description" type="text"value={description} onChange={(e)=> {setDescription(e.target.value)}}/>
        <br/>
        </label>

        <label>
        First Brewed:
          <input name="first_brewed" type="text" value={first_brewed} onChange={(e)=> {setFirstBrewed(e.target.value)}}/>
          <br/>
        </label>

        <label>
        Brewer's Tips:
        <input name="brewers_tips" type="text" value={brewers_tips} onChange={(e)=> {setBrewersTip(e.target.value)}}/>
        <br/>
        </label>

        <label>
        Attenuation Level:
        <input name="attenuation_level" type="number" value={attenuation_level} onChange={(e)=> {setAttenuationLevel(e.target.value)}}/>
        <br/>
        </label>

        <label>
        Contributed By:
        <input name="contributed_by" type="text" value={contributed_by} onChange={(e)=> {setContributedBy(e.target.value)}}/>
        <br/>
        </label>
        
        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
