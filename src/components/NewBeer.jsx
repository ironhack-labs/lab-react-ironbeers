import React, {useEffect, useState} from 'react'

import axios from 'axios'


export default function NewBeer() {

    const [newBeer, setNewBeer] = useState({
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewer_tips:"",
        attenuation_level:null,
        contributed_by:''
    })

    function handleChange(event) {
        event.preventDefault()
        setNewBeer({
            
            [event.target.name] : event.target.value
        })
        console.log(newBeer)
    }

    const addBeer = async() => {   
        
        const uploadBeer = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        setNewBeer({
            ...newBeer,
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewer_tips:"",
            attenuation_level:'',
            contributed_by:''
        })
    }

    return (
        <div>
            <form onSubmit={() => addBeer()}>
               <p><label>Name</label><input name='name' type='text' onChange={ (event) => { handleChange(event) } }  /></p>
               <p><label>Tagline</label><input name='tagline' type='text' onChange={ (event) => { handleChange(event) } }  /></p>
               <p><label>Description</label><input name='description' type='text' onChange={ (event) => { handleChange(event) } }  /></p>
               <p><label>First Brewed</label><input name='first_brewed' type='text' onChange={ (event) => { handleChange(event) } }  /></p>
               <p><label>Brewer Tips</label><input name='brewer_tips' type='text' onChange={ (event) => { handleChange(event) } }  /></p>
               <p><label>Attenuation Level</label><input name ='attenuation_level' type='number' onChange={ (event) => { handleChange(event) } }  /></p>
               <p><label>contributed by</label><input name='contributed_by' type='text' onChange={ (event) => { handleChange(event) } }  /></p>
               <button type='submit' >Add beer</button>
            </form>
        </div>
    )
}
