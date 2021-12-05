import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';


const NewBeer = () => {

    const [formState, setFormState] = useState({})
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        const urlNewBeer = "https://ih-beers-api2.herokuapp.com/beers/new/"

        axios
        .post(urlNewBeer, formState)
        .then( (response) => {
            setFormState({}) 
            history.push("/")        //history is an array!  
        })
        .catch( console.log )
    }

    const handleInput = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Header />
            <div className="add-beer-form">
                <h3>New Beer</h3>
            
                <form onSubmit={handleSubmit} >
                    
                    <div className="fields">
                        <label>Name</label>
                        <input type="text" name="name" value={formState.name || ""} 
                                onChange={ (e) => handleInput(e)} />
                    </div>

                    <div className="fields">
                        <label>Tagline</label>
                        <input type="text" name="tagline" value={formState.tagline || ""} 
                                onChange={ (e) => handleInput(e)} />
                    </div>

                    <div className="fields">
                        <label>Description</label>
                        <input type="text" name="description" value={formState.description || ""} 
                                onChange={ (e) => handleInput(e)} />
                    </div>

                    <div className="fields">
                        <label>Brewers Tips</label>
                        <input type="text" name="brewers_tips" value={formState.brewers_tips || ""} 
                                onChange={ (e) => handleInput(e)} />
                    </div>

                    <div className="fields">
                        <label>Attenuation Level</label>
                        <input type="number" name="attenuation_level" value={formState.attenuation_level || ""} 
                                onChange={ (e) => handleInput(e)} />
                    </div>

                    <div className="fields">
                        <label>Contributed By</label>
                        <input type="text" name="contributed_by" value={formState.contributed_by || ""} 
                                onChange={ (e) => handleInput(e)} />
                    </div>
                    
                    <button type="submit">Add New</button>
                
                </form>
            </div>
        </>
    )
}

export default NewBeer