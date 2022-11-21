import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axious from 'axious'



function NewBeer() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewersTips, setBrewerTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState('')
  const [contribuedBy, setContribuedBy] = useState('')


  const handleName = (e) => setName(e.target.value) 
  const handleTagline = (e) => setTagline(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
  const handleBrewerTips = (e) => setBrewerTips(e.target.value)
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
  const handlContribuedBy = (e) => setContribuedBy(e.target.value)
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const body = {name, tagline, description, firstBrewed,brewersTips, attenuationLevel, contribuedBy }
        await axious.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        
        setName('')
        setTagline('')
        setFirstBrewed('')
        setBrewerTips('')
        setAttenuationLevel('')
        setContribuedBy('')

        navigate('/')
    } catch (error) {
        console.log(error)
        
    }
  } 
  
    return (
    <div>
    
    <Link to='/'>
        <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='Image'/>
    </Link>
    <h3>New Beer</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" value={tagline} onChange={handleTagline} />

        <label htmlFor="description">Description</label>
        <input type="text" value={description} onChange={handleDescription} />

        <label htmlFor="firstBrewed">First Brewed</label>
        <input type="text" value={firstBrewed} onChange={handleFirstBrewed} />

        <label htmlFor="brewerTips">Brewers Tips</label>
        <input type="text" value={brewersTips} onChange={handleBrewerTips} />

        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input type="text" value={attenuationLevel} onChange={handleAttenuationLevel} />

        <label htmlFor="contribuedBy">Contribued By</label>
        <input type="text" value={contribuedBy} onChange={handlContribuedBy} />

        <button type="submit">List <Beer></Beer></button>

    </form>

    </div>
  )
}

export default NewBeer