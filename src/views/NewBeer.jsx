import React from 'react'
import { useState } from 'react'

const NewBeer = () => {

    const [formState, setFormState] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const handleInput = (e) => {
        console.log("I am in handle input")
    }

    
    return (
        <div className="add-beer-form">
            <h3>New Beer</h3>
            
            <form onSubmit={handleSubmit} >
            <label>Title</label>
            <input
                type="text"
                name="headline"
                //onChange={(e) => setHeadline(e.target.value)}
                onChange={ (e) => handleInput}
                value={formState.headline}
            />

            <label>Price per Day</label>
            <input
                type="number"
                name="pricePerDay"
                //onChange={(e) => setPrice(e.target.value)}
                onChange={ (e) => handleInput}
                value={formState.price}
            />
            
            <button type="submit">Create Apartment</button>
            
            </form>
        </div>
    )
}

export default NewBeer