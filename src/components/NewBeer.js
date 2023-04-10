import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"


function NewBeer() {
  const [name, setName] = useState(null);
  const [tagline, setTagline] = useState(null);
  const [description, setDescription] = useState(null);
  const [firstBrewed, setFirstBrewed] = useState(null);
  const [brewersTips, setBrewersTips] = useState(null);
  const [attenuationLevel, setAttenuationLevel] = useState(null);
  const [contributedBy, setContributedBy] = useState(null);

  
  const navigate = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
    }
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    .then(response=>{
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel("")
        setContributedBy("")
        navigate("/beers")
    })  
  }  

  return (
    <>
      <header>
        <Link to={"/"}> Home</Link>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
        <label> Name:
          <input type="text" name="name" placeholder="enter the name" onChange={(e) => { setName(e.target.value) }} />
          </label>
          <label> Tagline:
          <input type="text" name="tagline" placeholder="enter the tagline" onChange={(e) => { setTagline(e.target.value) }} />
          </label>
           <label> Description:
          <input type="text" name="description" placeholder="enter the description" onChange={(e) => { setDescription(e.target.value) }} />
          </label>
          <label> First brewed:
          <input type="text" name="firstBrewed" placeholder="enter the firstBrewed" onChange={(e) => { setFirstBrewed(e.target.value) }} />
          </label>
           <label> Brewers tips:
          <input type="text" name="brewersTips" placeholder="enter the brewersTips" onChange={(e) => { setBrewersTips(e.target.value) }} />
          </label>
          <label> Attenuation level:
          <input type="number" name="attenuationLevel" placeholder="enter the attenuationLevel" onChange={(e) => { setAttenuationLevel(e.target.value) }} />
          </label>
          <label> Contributed by:
          <input type="text" name="contributedBy" placeholder="enter the contributedBy" onChange={(e) => { setContributedBy(e.target.value) }} />
          </label>
          
          <button>Create</button>
        </form>
      </section>
    </>
  );
}

export default NewBeer