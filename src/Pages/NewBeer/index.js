import React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form } from 'reactstrap';
import NavBar from '../../components/NavBar';
import './NewBeer.css';



function NewBeer() {

    const navigate = useNavigate()
    
    const [form, setForm] = useState({
          
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          atteniation_level: 0,
          contributed_by: ""
    })

    function handleChange(e){
        setForm({...Form, [e.target.name]: e.target.value})
    }
    console.log(form)

    async function handleSubmit(e){
        e.preventDefault()
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
           
      }
    

    return (
        <div>
        <NavBar/>
        
       

        <div className="NewBeerContainer">
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', alignItems: 'flex-start', width: '100%'}}>
            <label className="NewBeerLabel">Name: </label>
            <input className="fieldInput" name='name' value={form.name} onChange={handleChange}/>

            <label>Tag Line: </label>
            <input className="fieldInput" name='tagline' value={form.tagline} onChange={handleChange}/>

            <label>Description: </label>
            <input className="fieldInput" name='description' value={form.description} onChange={handleChange}/>

            <label>First Brewed: </label>
            <input className="fieldInput" name='first_brewed' value={form.first_brewed} onChange={handleChange}/>

            <label>Brewers Tips: </label>
            <input className="fieldInput" name='brewers_tips' value={form.brewers_tips} onChange={handleChange}/>

            <label>Attenuation Level</label>  {/* tem q se numeroooo */}
            <input className="fieldInput" name='attenuation_level' value={+(form.attenuation_level)} onChange={handleChange}/>

            <label>Contributed by: </label>
            <input className="fieldInput" name='contributed_by' value={form.contributed_by} onChange={handleChange}/>

            <button className="buttonAddNew" type='submit'>Add New</button>
        </form>
        </div>
        </div>
        
    )
}

export default NewBeer;