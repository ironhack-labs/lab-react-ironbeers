import { Link } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const imgURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"


function NewBeerPage() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")

  const navigate = useNavigate()

  const handleNameChange = (e) => setName(e.target.value)
  const handleTaglineChange = (e) => setTagline(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value)
  const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value)
  const handleAttenuationLevelChange = (e) => setAttenuationLevel(e.target.value)
  const handleContributedByChange = (e) => setContributedBy(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = { name: name, tagline: tagline, description: description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(response => {
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel(0)
        setContributedBy("")

        navigate("/beers")
      })


  }


  return (
    <div>
      <header>
        <Link to="/"> <img src={imgURL} alt="header" style={{ width: "100vw" }} /></Link>
      </header>
      <form onSubmit={handleSubmit} className="new-beer">
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleNameChange} />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" value={tagline} onChange={handleTaglineChange} />

        <div className="special">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" value={description} onChange={handleDescriptionChange} />
        </div>

        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewedChange} />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTipsChange} />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevelChange} />

        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" name="contributed_by" value={contributedBy} onChange={handleContributedByChange} />
        </div>
        <button type="submit">ADD NEW</button>
      </form>

    </div>


  );
}

export default NewBeerPage;