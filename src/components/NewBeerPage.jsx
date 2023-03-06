import React from 'react'
import axios from 'axios'
import './NewBeerPage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/Form';

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
<div className='formulario'>
<Form onSubmit={submitForm}>

    <Label htmlFor="name">Name</Label>
    <input type="text" id="name" name="name"/>
    <Label htmlFor="name">Tagline</Label>
    <input type="text" id="tagline" name="tagline"/>
    <Label htmlFor="name">Description</Label>
    <input type="text" id="description" name="description"/>
    <Label htmlFor="name">First_brewed</Label>
    <input type="text" id="first_brewed " name="first_brewed"/>
    <Label htmlFor="name">Brewers_tips</Label>
    <input type="text" id="brewers_tips" name="brewers_tips"/>
    <Label htmlFor="name">Attenuation_level</Label>
    <input type="number" id="attenuation_level" name="attenuation_level"/>
    <Label htmlFor="name">Contributed_by</Label>
    <input type="text" id="contributed_by" name="contributed_by"/>
   

  <Button type="submit">Enviar un mensaje</Button>
</Form>
</div>
    </div>
  )
}

export default NewBeerPage