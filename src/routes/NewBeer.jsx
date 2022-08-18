import {createContact} from '../services/createBeer'
import { useState } from 'react';
import "../App.css";
import NavBar from '../components/navBar';

export default function NewBeer(){

const [beerInfo , setbeerInfo] = useState()

const handleSubmit = async (e) =>{
    e.preventDefault();
  const result = await createContact(beerInfo)
  console.log("response from axios",result)
}

const handleChange = (e)=>{
setbeerInfo(
    {...beerInfo,
    [e.target.name]:e.target.value})
}
   
    return (

        <div>
        <NavBar/>

<h1 style={{textAlign: 'center',
      marginTop:'40px',
      marginBottom:'20px'}}>Create a new Beer</h1>

        <form className="form" onSubmit = {handleSubmit}>

        <label>Beer's name</label>
        <input name="name" type="text" onChange= {handleChange} />

        <label>Beer's tagline</label>
        <input name="tagline" type="text" onChange= {handleChange} />
        
        <label >Beer's description</label>
        <input id='description' name="description" type="text" onChange= {handleChange} />

        <label>Beer's first brewed</label>
        <input name="first_brewed" type="text" onChange= {handleChange} />

        <label>Beer's tips</label>
        <input name="brewers_tips" type="text" onChange= {handleChange} />

        <label>Beer's attenuation level</label>
        <input name="attenuation_level" type="number" onChange= {handleChange} />
        
        <label>Beer's contribution</label>
        <input name="contributed_by" type="text" onChange= {handleChange} />
        
        <button type="submit" > Create new Beer</button>
        </form>
        </div>
    )
}


