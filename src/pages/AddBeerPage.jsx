import { useState } from "react";
import  { useNavigate} from "react-router-dom";
import axios from "axios";


function AddBeerPage() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0) 
    const [contributed_by, setContributedBy] = useState('')

    const handleName = (event) => {

        setName(event.target.value)
    } 
    const handleTagline = (event) => {

        setTagline(event.target.value)
    } 
    const handleDescription = (event) => {

        setDescription(event.target.value)
    } 
    const handleFirstBrewed = (event) => {

        setFirstBrewed(event.target.value)
    } 
    const handleBrewerTips = (event) => {

        setBrewersTips(event.target.value)
    } 
    const handleAttenuationLevel = (event) => {

        setAttenuationLevel(event.target.value)
    } 
    const handleContributedBy = (event) => {

        setContributedBy(event.target.value)
    } 

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const beer ={
                name,
                tagline, 
                description, 
                first_brewed, 
                brewers_tips, 
                attenuation_level : String(attenuation_level), 
                contributed_by
            }
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
            
            navigate('/beers')


        }catch(error){
            console.log('error creating the project',error)
        }
    }


  return (
    <div>
    <h2>Add a Beer</h2>

    <form onSubmit={handleSubmit} > 

    <label >Name</label>
    <input type="text" name='name' value={name} onChange={handleName} />

    <label >Tagline</label>
    <input itemType="text" name='tagline' value={tagline} onChange={handleTagline}/>

    <label >Description</label>
    <textarea type="text" name='description' value={description} onChange={handleDescription}> </textarea>

    <label >First Brewed</label>
    <input type="text" name='first_brewed' value={first_brewed} onChange={handleFirstBrewed}/>

    <label >Brewer´s Tips</label>
    <input type="text" name='brewers_tips' value={brewers_tips} onChange={handleBrewerTips} />

    <label >Attenuation Level</label>
    <input type="number" name='attenuation_level' value={attenuation_level} onChange={handleAttenuationLevel} />

    <label >Contributed By</label>
    <input type="text" name='contributed_by' value={contributed_by} onChange={handleContributedBy} />



    <button type='submit'>Add Beer</button>

    </form>
      
    </div>
  )


   
}



export default AddBeerPage;
