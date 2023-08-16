import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialForm = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
}

const NewBeer = () => {

    const [ formData, setFormData] = useState(initialForm);

    const navigate = useNavigate();

    const handleForm = (fieldName, value) => {
        setFormData( (prevData) => ( { ...prevData, [fieldName]: value })  )
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(formData)
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
        console.log(response)
        navigate('/');
        setFormData(initialForm)
    }

  return (

      <div>
        <Header />
      
      <div className="addBeer">
        <form onSubmit={handleSubmit}>
          <label><p>Name:</p></label>
          <input 
            type="text" 
            name="name"
            id="name"
            value={formData.name}
            onChange={ (e) => handleForm("name", e.target.value) }
            />

          <label><p>Tagline:</p></label>
          <input 
            type="text" 
            name="tagline" 
            id="tagline"
            value={formData.tagline}    
            onChange={ (e) => handleForm("tagline", e.target.value) }
            />

          <label><p>Description:</p></label>
          <textarea 
            type="text" 
            name="description"
            id="description"
            value={formData.description}
            onChange={ (e) => handleForm("description", e.target.value) }
            />

          <label><p>First Brewed:</p></label>
          <input 
            type="text" 
            name="first_brewed"
            id="first_brewed" 
            value={formData.first_brewed}    
            onChange={ (e) => handleForm("first_brewed", e.target.value) }
            />

          <label><p>Brewers Tips:</p></label>
          <input 
            type="text" 
            name="brewers_tips"
            id="brewers_tips"
            value={formData.brewers_tips}
            onChange={ (e) => handleForm("brewers_tips", e.target.value) }
            />

          <label><p>Attenuation Level:</p></label>
          <input    
            type="number" 
            name="attenuation_level"
            id="attenuation_level"
            value={formData.attenuation_level} 
            onChange={ (e) => handleForm("attenuation_level", e.target.value) }

            />

          <label><p>Contributed By:</p></label>
          <input    
            type="text" 
            name="contributed_by" 
            id="contributed_by"
            value={formData.contributed_by}    
            onChange={ (e) => handleForm("contributed_by", e.target.value) }
            />

          <button type="submit">ADD NEW</button>
        </form>
      </div>
      </div>

  );
};

export default NewBeer;
