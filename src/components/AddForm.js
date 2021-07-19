import React, { useState, useEffect } from 'react';
import header from '../assets/header.png';
import {Link} from 'react-router-dom'

function AddForm(props) {
 
  return (
    <div>
       <Link to ="/">
   <img src={header} alt="home"/>
   </Link>
     
        <form onSubmit ={props.onAddBeer} noValidate autoComplete="off">
               
                <input placeholder="Name" type="text" name="name"></input>
                <input placeholder="Tagline" type="text" name ="tagline"></input>
                <textarea placeholder="Description" type="text" name="description"></textarea>
                <input placeholder="First brewed" type="text" name="brewed"></input>
                <input placeholder="Brewers Tips" type="text" name="tips"></input>
                <input placeholder="Attenuation level" type="number" name="attenuation"></input>
                <input placeholder="Contributed by" type="text" name="contributed"></input>

                <button type="submit" variant="contained" color="primary">
                    Add new Beer
                </button>
            </form>
        



     
    </div>
  );
}

export default AddForm;
