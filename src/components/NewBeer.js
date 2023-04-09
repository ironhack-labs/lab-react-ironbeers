import { useNavigate } from 'react-router-dom';
import Header from './Header'
import { useState } from 'react';
import axios from 'axios';

function NewBeer() {

  const navigate = useNavigate();
  const url = "https://ih-beers-api2.herokuapp.com/beers"

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    }
  
    axios.post(url + "/new", newBeer)
      .then(response => {
        setName("");
        setTagline("");
        setDescription("");
        setfirstBrewed("");
        setBrewerTips("")
        setAttenuationLevel("");
        setContributedBy("");
        navigate('/beers')
      })
      .catch(e => {
        console.log("error getting beers from API", e)
      })
  }

  return (
    <div>
      <Header />
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
  <label>
    Name:<br />
    <input type="text" name="name" value={name} onChange={(e)=> {setName(e.target.value)} } />
  </label><br />

  <label>
    Tagline:<br />
    <input type="text" name="tagline" value={tagline} onChange={(e)=> {setTagline(e.target.value)} } />
  </label><br />

  <label>
    Description:<br />
    <input type="text" name="description" value={description} onChange={(e)=> {setDescription(e.target.value)} } />
  </label><br />

  <label>
    First Brewed:<br />
    <input type="text" name="firstBrewed" value={firstBrewed} onChange={(e)=> {setfirstBrewed(e.target.value)} } />
  </label><br />

  <label>
    Brewer tips:<br />
    <input type="text" name="brewerTips" value={brewerTips} onChange={(e)=> {setBrewerTips(e.target.value)} } />
  </label><br />

  <label>
    Attenuation level:<br />
    <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={(e)=> {setAttenuationLevel(e.target.value)} } />
  </label><br />

  <label>
    Contributed by:<br />
    <input type="text" name="contributedBy" value={contributedBy} onChange={(e)=> {setContributedBy(e.target.value)} } />
  </label><br />

  <button>Add Beer</button>
</form>
    </div>
  )
}

export default NewBeer