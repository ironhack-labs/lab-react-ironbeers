import axios from "axios"
import { useState } from "react"

function NewBeer(){

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewerTips, setBrewerTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState('')
  
  const handleName = (e) => setName(e.target.value)
  const handleTagline = (e) => setTagline(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
  const handleBrewerTips = (e) => setBrewerTips(e.target.value)
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
  const handleContributedBy = (e) => setContributedBy(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {name, tagline, description, first_brewed: firstBrewed, brewer_tips: brewerTips, attenuation_level: attenuationLevel, contributed_by: contributedBy}
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
      .then(response => {
        console.log(response)
      })
  }

  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleName} name="name" placeholder="Name"/>
      <input onChange={handleTagline} name="tagline" placeholder="Tagline"/>
      <input onChange={handleDescription} name="description" placeholder="Description"/>
      <input onChange={handleFirstBrewed} name="first_brewed" placeholder="First Brewed"/>
      <input onChange={handleBrewerTips} name="brewer_tips" placeholder="Brewer Tips"/>
      <input onChange={handleAttenuationLevel} name="attenuation_level" placeholder="Attenuation Level" type="number"/>
      <input onChange={handleContributedBy} name="contributed_by" placeholder="Contributed By"/>
      <button>ADD NEW</button>
    </form>
  )
}
export default NewBeer

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text