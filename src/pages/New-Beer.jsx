import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

function NewBeer() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")

  const navigate = useNavigate();

  const handleName  = (e) => setName(e.target.value);
  const handleTagline  = (e) => setTagline(e.target.value);
  const handleDescription  = (e) => setDescription(e.target.value);
  const handleFirstBrewed   = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips  = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel  = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy  = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline:tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy
    }
     axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
     
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
    <div className="AddBeerPage">
    <Header/>
    <h2>New Beers</h2>
    <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={handleName}/>
            <br />
            <label htmlFor="tagline">Tagline</label>
            <input type="text" value={tagline} onChange={handleTagline}/>
            <br />
            <label htmlFor="description">Description</label>
            <input type="text" value={description} onChange={handleDescription}/>
            <br />
            <label htmlFor="firstBrewed">First brewed:</label>
            <input type="number" value={firstBrewed} onChange={handleFirstBrewed}/>
            <br />
            <label htmlFor="brewersTips">Brewer Tips</label>
            <input type="text" value={brewersTips} onChange={handleBrewersTips}/>
            <br />
            <label htmlFor="attenuationLevel"> Attenuation</label>
            <input type="text" value={attenuationLevel} onChange={handleAttenuationLevel}/>
            <br />
            <label htmlFor="contributedBy">Contributed by:</label>
            <input type="text" value={contributedBy} onChange={handleContributedBy}/>
            <br />
            <button className="form-btn" type="submit">Create</button>
   </form>
    </div>
  );
}
export default NewBeer;