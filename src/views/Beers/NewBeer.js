import React, { useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import { Navigate, useNavigate } from 'react-router';
// import { addNewBeer } from '../../services/BeersService';
import axios from 'axios';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 10,
  contributed_by: ''
}

const NewBeer = ({ onSubmit }) => {
  const [newBeer, setNewBeer]= useState(initialState);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    
    setNewBeer({
      ...newBeer,
      [name]: value
    })
    console.log('nueva birrita', newBeer)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = newBeer

    if (name && tagline && description && first_brewed && brewers_tips && attenuation_level && contributed_by) {
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        .then(()=> {
          onSubmit({
            ...newBeer,
            id: uuidv4()
          })
          navigate("/")
        })
    }
  }

  return ( 
    <>
      <form onSubmit={handleSubmit}>

      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
      <input className="form-control form-control-sm" type="text" aria-label=".form-control-sm example"
        name="name"
        onChange={handleChange}
      />
      </div>

      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" 
        className="form-label">Tagline</label>

      <input className="form-control form-control-sm"  
        type="text" aria-label=".form-control-sm example"
        name="tagline"
        onChange={handleChange}
      />
      </div>


      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>

      <input className="form-control form-control-sm"  
        type="textarea" aria-label=".form-control-sm example"
        name="description"
        onChange={handleChange}
      />
      </div>


      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">First Brewed</label>

      <input className="form-control form-control-sm" 
        type="text" aria-label=".form-control-sm example"
        name="first_brewed"
        onChange={handleChange}
      />
      </div>


      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" 
        className="form-label">Brewed Tips</label>

      <input className="form-control form-control-sm" 
        type="text" aria-label=".form-control-sm example"
        name="brewers_tips"
        onChange={handleChange}
      />
      </div>


      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Attenuation level</label>

      <input className="form-control form-control-sm" 
        type="number" aria-label=".form-control-sm example"
        name="attenuation_level"
        onChange={handleChange}
      />
      </div>


      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Attenuation level</label>

      <input className="form-control form-control-sm" 
        type="text" aria-label=".form-control-sm example"
        name="contributed_by"
        onChange={handleChange}
      />
      </div>
        <button type="submit">ADD NEW BEER</button>

      </form>
    </>
   );
}
 
export default NewBeer;