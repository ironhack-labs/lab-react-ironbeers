import React from 'react'
import {Link} from 'react-router-dom'

export default function NewBeer(props) {
    return (
      <div>
        <Link to='/'> <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home button'/> </Link> 
      
        <form onSubmit={props.onSubmit}>
          <input name="name" type="text" placeholder="Enter Name"></input>
          <input name="tagline" type="text" placeholder="Enter Tagline"></input>
          <input name="description" type="text" placeholder="Enter Description"></input>
          <input name="first_brewed" type="text" placeholder="Enter first brew date"></input>
          <input name="brewers_tips" type="text" placeholder="Enter Tips"></input>
          <input name="attenuation_level" type="number" placeholder="Enter Attenuation Level"></input>
          <input name="contributed_by" type="text" placeholder="Enter Your Name"></input>
          <button type="submit">Create</button>
        </form>           
      </div>
    )
}
