import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ApiContext } from '../contexts/api.context'
import Header from '../components/Header'

function NewBeer() {
  const {apiUrl} = useContext(ApiContext)

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewerTips, setBrewerTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState('')

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTips = (e) => setBrewerTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(Number(e.target.value));
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBeer = {
      name, 
      tagline, 
      description, 
      first_brewed: firstBrewed, 
      brewer_tips: brewerTips, 
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    }
    try {
      await axios.post(`${apiUrl}/new`, newBeer)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
        <Header />
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name</label>
          <input type="text" name='name' value={name} onChange={handleName}/>
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name='tagline' value={tagline} onChange={handleTagline}/>
          <label htmlFor="description">Description</label>
          <input type="area" name='description' value={description} onChange={handleDescription}/>
          <label htmlFor="firstBrewed">First Brewed</label>
          <input type="text" name='firstBrewed' value={firstBrewed} onChange={handleFirstBrewed}/>
          <label htmlFor="brewerTips">Brewer Tips</label>
          <input type="text" name='brewerTips' value={brewerTips} onChange={handleBrewerTips}/>
          <label htmlFor="attenuationLevel">Attenuation Level</label>
          <input type="number" name='attenuationLevel' value={attenuationLevel} onChange={handleAttenuationLevel}/>
          <label htmlFor="contributedBy">Created By</label>
          <input type="text" name='contributedBy' value={contributedBy} onChange={handleContributedBy}/>

          <button type='submit'>Add Beer</button>

        </form>
    </>
  )
}

export default NewBeer