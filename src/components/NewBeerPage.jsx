import React from 'react'
import axios from 'axios'

function NewBeerPage() {

    const submitForm = async (e)=>{
         e.preventDefault()
       const name=e.target[0].value;
       const tagline=e.target[1].value;
       const description=e.target[2].value;
       const first_brewed=e.target[3].value;
       const brewers_tips=e.target[4].value;
       const attenuation_level=e.target[5].value;
       const contributed_by=e.target[6].value;

            await createBeer(
                {name, 
                tagline, 
                description, 
                first_brewed, 
                brewers_tips, 
                attenuation_level,
                contributed_by    
            })
        
    }

    const createBeer=(newBeer)=>{
            axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer)
            .then(response=>{
               console.log(response.data)
            })
       
    }

  return (
    <div>

<form onSubmit={submitForm}>

    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name"/>
    <label htmlFor="name">Tagline</label>
    <input type="text" id="tagline" name="tagline"/>
    <label htmlFor="name">Description</label>
    <input type="text" id="description" name="description"/>
    <label htmlFor="name">First_brewed</label>
    <input type="text" id="first_brewed " name="first_brewed"/>
    <label htmlFor="name">Brewers_tips</label>
    <input type="text" id="brewers_tips" name="brewers_tips"/>
    <label htmlFor="name">Attenuation_level</label>
    <input type="number" id="attenuation_level" name="attenuation_level"/>
    <label htmlFor="name">Contributed_by</label>
    <input type="text" id="contributed_by" name="contributed_by"/>
   

  <button type="submit">Enviar un mensaje</button>
</form>
    </div>
  )
}

export default NewBeerPage