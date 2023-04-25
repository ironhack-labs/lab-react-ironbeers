import HeaderLink from "../components/headerLink"
import { useState } from "react"
import axios from "axios"

function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  })

  const handleSubmit = (e) => {
    console.log("submitted")
    e.preventDefault()

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
    



    setNewBeer({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    })

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setNewBeer({...newBeer, [name]: value})
  }

  return (
    <div>
        <HeaderLink />
        <form onSubmit={handleSubmit} className="new-beer-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={newBeer.name} onChange={handleChange}/>

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline" value={newBeer.tagline} onChange={handleChange}/>

          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" id="description" value={newBeer.description} onChange={handleChange} rows='5'/>

          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" id="first_brewed" value={newBeer.first_brewed} onChange={handleChange}/>

          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" name="brewers_tips" id="brewers_tips" value={newBeer.brewers_tips} onChange={handleChange}/>

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" name="attenuation_level" id="attenuation_level" value={newBeer.attenuation_level} onChange={handleChange}/>

          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name="contributed_by" id="contributed_by" value={newBeer.contributed_by} onChange={handleChange}/>

          <button type="submit">Add New</button>
        </form>
    
    </div>
  )
}

export default NewBeer