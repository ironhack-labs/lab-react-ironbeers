
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const [newBeer, setNewBeer] = useState({
      name: "",
      tagline: "", 
      description, 
      first_brewed : "" ,
      brewers_tips : "",
      attenuation_level: "", 
      contributed_by : ""
    })

      const pushBeer = async () => {
        const { data } = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
        
      };
      pushBeer();
      

  }

  return (
    <div>
      <header>
        <Link to={"/"}>Back to Home</Link>
      </header>

    <form onSumbit={submitHandler}>
      <label>name : </label>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

      <label>tagline : </label>
      <input type="text" value={tagline} onChange={(e)=>{setTagline(e.target.value)}}/>

      <label>description : </label>
      <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>

      <label>firstBrewed : </label>
      <input type="text" value={firstBrewed} onChange={(e)=>{setFirstBrewed(e.target.value)}}/>

      <label>brewersTips : </label>
      <input type="text" value={brewersTips} onChange={(e)=>{setBrewersTips(e.target.value)}}/>

      <label>attenuationLevel : </label>
      <input type="number" value={attenuationLevel} onChange={(e)=>{setAttenuationLevel(e.target.value)}}/>

      <label>contributedBy : </label>
      <input type="text" value={contributedBy} onChange={(e)=>{setContributedBy(e.target.value)}}/>


      <button type="submit">Submit</button>
    </form>

    </div>
  );
}

export default NewBeer;
