import { useState } from "react";
import axios from "axios";

export default function AddBeerForm(props) {
  const API_URL = process.env.REACT_APP_API_URL

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  function handleName(event) {
    event.preventDefault();
    setName(event.target.value)
  }
  function handleTagline(event) {
    event.preventDefault();
    setTagline(event.target.value)
  }
  function handleDescription(event) {
    event.preventDefault();
    setDescription(event.target.value)
  }
  function handleFirstBrewed(event) {
    event.preventDefault();
    setFirstBrewed(event.target.value)
  }
  function handleBrewersTips(event) {
    event.preventDefault();
    setBrewersTips(event.target.value)
  }
  function handleAttenuationLevel(event) {
    event.preventDefault();
    setAttenuationLevel(event.target.value)
  }
  function handleContributedBy(event) {
    event.preventDefault();
    setContributedBy(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed:firstBrewed,
      brewers_tips:brewersTips,
      attenuation_level : parseFloat(attenuationLevel),
      contributed_by: contributedBy,
    }
    async function sendBeer(beer) {
      try {
        // eslint-disable-next-line
        const response = await axios.post(API_URL+ '/new',beer)
        
      } catch (error) {
        console.log(error)
      }
    }
    sendBeer(newBeer);
    setName('')
    setTagline('')
    setAttenuationLevel(0)
    setBrewersTips('')
    setContributedBy('')
    setDescription('')
  }


  return (
    <div className="form-holder">

    <form className="new-beer-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={name} onChange={handleName}/>

      <label htmlFor="tagline">Tagline</label>
      <input type="text" name="tagline" id="tagline" value={tagline} onChange={handleTagline}/>

      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" value={description} onChange={handleDescription}/>

      <label htmlFor="first_brewed">First brewed</label>
      <input type="text" name="first_brewed" id="first_brewed" value={firstBrewed} onChange={handleFirstBrewed}/>

      <label htmlFor="brewers_tips">Brewers tips</label>
      <input type="text" name="brewers_tips" id="brewers_tips" value={brewersTips} onChange={handleBrewersTips}/>

      <label htmlFor="attenuation_level">Attenuation level</label>
      <input type="number" name="attenuation_level" id="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevel}/>

      <label htmlFor="contributed_by">Contributed by</label>
      <input type="text" name="contributed_by" id="contributed_by" value={contributedBy} onChange={handleContributedBy}/>

      <button type="submit">Send the new beer</button>
    </form>
    </div>
  )
}

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text
