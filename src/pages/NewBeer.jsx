import React, {useState} from 'react'
import NavBar from "../components/NavBar";

function NewBeer({addNewBeer}) {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState(0)
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuation, setAttenuation] = useState(0)
  const [contributedBy, setContributedBy] = useState("")

  const handleName = (e) => setName(e.target.value)
  const handleTagline = (e) => setTagline(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleFirstBrewed = (e) => setFirstBrewed(Number(e.target.value))
  const handleBrewersTips = (e) => setBrewersTips(e.target.value)
  const handleAttenuation = (e) => setAttenuation(Number(e.target.value))
  const handleContributedBy = (e) => setContributedBy(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefaul()

    const newBeer = {
      name: name,
      tagline:tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuation: attenuation,
      contributedBy: contributedBy
    }
    addNewBeer(newBeer)


  }

  return (
    <div>
    <NavBar />
  <form onSubmit={handleSubmit}>   
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleName}/>

            <label htmlFor="tagline">Tagline</label>
            <input type="text" value={tagline} onChange={handleTagline}/>

            <label htmlFor="description">Description</label>
            <input type="text" value={description} onChange={handleDescription}/>

            <label htmlFor="firstBrewed">First brewed:</label>
            <input type="number" value={firstBrewed} onChange={handleFirstBrewed}/>

            <label htmlFor="brewerTips">Brewer Tips</label>
            <input type="text" value={name} onChange={handleBrewersTips}/>

            <label htmlFor="attenuation"> Attenuation</label>
            <input type="text" value={attenuation} onChange={handleAttenuation}/>

            <label htmlFor="contributedBy">Contributed by:</label>
            <input type="text" value={contributedBy} onChange={handleContributedBy}/>

            <button className="form-btn" type="submit">Create</button>
        </form>
    </div>
  )
}

export default NewBeer