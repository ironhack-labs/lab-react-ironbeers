import React, { useState, useEffect } from "react";




export default function NewBeerForm() {


    handleOnChange = (event) => {
        const { value, name } = event.target 
        this.setState({ [name]: value }) // meter entre corchetes una variable para hacer el key dinamico
      //y actualizar el estafo
    }

    handleOnSubmit = (event) => {
        event.preventDefault() 
        // Para evitar el comportamiento por defecto de un form, 
        //que seria hacer peticion get y nos refrescaria la pagina
    }

    return (
        <div>
           <form>
                <input 
                type="text" name="name" value={} onChange={this.handleOnChange} placeholder="Name of beer ..."   
                />
                <input 
                type="text" name="tagline" value={} onChange={this.handleOnChange} placeholder="Tagline ..."   
                />
                <input 
                type="text" name="description" value={} onChange={this.handleOnChange} placeholder="Description ..."   
                />
                <input 
                type="text" name="first_brewed" value={} onChange={this.handleOnChange} placeholder="Brewed ..."   
                />
                <input 
                type="text" name="brewers_tips" value={} onChange={this.handleOnChange} placeholder="Tips ..."   
                />
                <input 
                type="number" name="attenuation_level" value={} onChange={this.handleOnChange} placeholder="Attenuation Level ..."   
                />
                <input 
                type="text" name="contributed_by" value={} onChange={this.handleOnChange} placeholder="Contribution by ..."   
                />
                <button type='submit' onClick={handleOnSubmit}>Add New</button>
           </form>
        </div>
    )
}



