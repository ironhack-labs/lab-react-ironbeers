import { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios
from "axios"

const API_URL =  process.env.REACT_APP_BASE_URL

function NewBeer () {
    const [allValuse, setAllValues ] = useState({
        name: '',
        tagline: '',
        desription: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })

    const navigate = useNavigate()

    const {name, tagline, desription, firstbrewed, brewerstips, attenuationlevel, contributedby} = allValuse

    const changeHandler = e => {
        
        setAllValues({...allValuse, [e.target.name]: e.target.value})
     }

     

     const handleSubmit = (e) => {
        e.preventDefault()
        const newBeer= {
            name: name,
            tagline: tagline,
            desription: desription,
            first_brewed: firstbrewed,
            brewers_tips: brewerstips,
            attenuation_level: attenuationlevel ,
            contributed_by: contributedby}
        axios.post(`${API_URL}/new`, newBeer )
        .then(res => navigate('/beers'))
        .catch(err => console.log('err',err))
     }

    return (
      <div>
        <h2>Add Beer</h2>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name"  value={name} onChange={changeHandler}/>
            
            <label>Tagline</label>
            <input type="text" name="tagline"  value={tagline} onChange={changeHandler}/>
            
            <label>Desription</label>
            <input type="text" name="desription"  value={desription} onChange={changeHandler}/>
            
            <label>First Brewed</label>
            <input type="text" name="first_brewed"  value={firstbrewed} onChange={changeHandler}/>

            <label>Tips</label>
            <input type="text" name="brewers_tips"  value={brewerstips} onChange={changeHandler}/>
            
            <label>Attenuation Level</label>
            <input type="text" name="attenuation_level"  value={attenuationlevel} onChange={changeHandler}/>
            
            <label>Contributor</label>
            <input type="text" name="contributed_by"  value={contributedby} onChange={changeHandler}/>
            
            <button type="submit">Create Beer</button>
        </form>

      </div>
    )
}


export default NewBeer