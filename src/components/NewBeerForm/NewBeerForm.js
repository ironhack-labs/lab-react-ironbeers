import './NewBeerForm.css'
import React, { useState } from "react";
import {NewBeer} from '../../services/services'

export default function NewBeerForm() {
    const [data, setBeers] = useState({
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:"",
        contributed_by:""

    });


    const handleOnChange = (event) => {
        const { value, name } = event.target 
        setBeers({ ...data, [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
      //y actualizar el estafo
    }

  

    const handleOnSubmit = (event) => {
        event.preventDefault() 
        NewBeer(data)
        // Para evitar el comportamiento por defecto de un form, 
        //que seria hacer peticion get y nos refrescaria la pagina
    }

    return (
        <div>
           <form className="form">
                <input 
                type="text" name="name" value={data.name} onChange={handleOnChange} placeholder="Name of beer ..."   
                />
                <input 
                type="text" name="tagline" value={data.tagline} onChange={handleOnChange} placeholder="Tagline ..."   
                />
                <input 
                type="text" name="description" value={data.description} onChange={handleOnChange} placeholder="Description ..."   
                />
                <input 
                type="text" name="first_brewed" value={data.first_brewed} onChange={handleOnChange} placeholder="Brewed ..."   
                />
                <input 
                type="text" name="brewers_tips" value={data.brewers_tips} onChange={handleOnChange} placeholder="Tips ..."   
                />
                <input 
                type="number" name="attenuation_level" value={data.attenuation_level} onChange={handleOnChange} placeholder="Attenuation Level ..."   
                />
                <input 
                type="text" name="contributed_by" value={data.contributed_by} onChange={handleOnChange} placeholder="Contribution by ..."   
                />
                <button type='submit' onClick={handleOnSubmit}>Add New</button>
           </form>
        </div>
    )
}



