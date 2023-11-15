import axios from "axios";
import { useEffect } from "react";

function AddBeerPage() {

  function handleSubmit (e) {
e.preventDefault ()
console.log(e)
console.log(e.target)
axios
.post ("https://ih-beers-api2.herokuapp.com/beers/new",{
  name:e.target.name.value, 
  tagline:e.target.Tagline.value, 
  description:e.target.description.value,
  first_brewed:e.target.first_brewed.value,
  brewers_tips:e.target.brewers_tips.value,
  attenuation_level:e.target.attenuation_level.value,
  contributed_by:e.target.contributed_by.value,

})
.then ((response) => {
  console.log(response)
})
.catch ((error) => {
  console.log(error)

}) 
  }
  
  return (
    

  <form onSubmit={handleSubmit}>
    <label>
      Name
      <input type="text" name="name" />
    </label>
    <label>
      Tagline
      <input type="text" name="Tagline" />
    </label>
    <label>
      Textarea
      <input type="text" name="description" />tu a
    </label>
    <label>
      First Brewed
      <input type="text" name="first_brewed" />
    </label>
    <label>
      Brewer's Tips
      <input type="text" name="brewers_tips" />
    </label>
    <label>
      Attenuation Level
      <input type="number" name="attenuation_level" />
    </label>
    <label>
      Contributed By
      <input type="text" name="contributed_by" />
    </label>
    <label>
      <button type="submit"> Add Beer </button>
    </label>
  </form>
  )
}

export default AddBeerPage;
