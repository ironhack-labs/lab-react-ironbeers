import React from 'react'

export default function NewBeer() {
  return (
    <form method='POST' action='https://ih-beers-api2.herokuapp.com/beers/new'>
      <label htmlFor='name'>Name</label>
      <input type="text" id="name" name="name"/><br/>

      <label htmlFor='tagline'>Tagline</label>
      <input type="text" id="tagline" name="tagline"/><br/>

      <label htmlFor='description'>Description</label>
      <textarea id="description" rows="5" cols="50" name="description"/><br/>

      <label htmlFor='firstBrewed'>First Brewed</label>
      <input type="text" id="'firstBrewed" name="first_brewed"/><br/>

      <label htmlFor='brewerTips'>Brewer Tips</label>
      <input type="text" id="brewerTips" name="brewers_tips"/><br/>

      <label htmlFor='attenuationLevel'>Attenuation Level</label>
      <input type="number" id="attenuationLevel" name="attenuation_level"/><br/>

      <label htmlFor='contributedBy'>Contributed By</label>
      <input type="text" id="contributedBy" name="contributed_by"/><br/>

      <button type='submit'>Create Beer</button>
    </form>
  )
}
