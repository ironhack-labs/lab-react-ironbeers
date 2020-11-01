import React from 'react'
import Header from './Header'

function NewBeer(props) {
    return (
        <div className="container">
        <Header/>
        <form onSubmit={props.onAdd} className="form">
            <p className="form-copy">Name:</p>
            <input className="form-field" name="name" type="text" placeholder="Enter name" ></input>
            <p className="form-copy">Tagline:</p>
            <input className="form-field" name="tagline" type="text" placeholder="Enter tagline" ></input>
            <p className="form-copy">First brew date:</p>
            <input className="form-field" name="first_brewed" type="text" placeholder="Enter first brewed date" ></input>
            <p className="form-copy">Brew tips:</p>
            <input className="form-field" name="brewers_tips" type="text" placeholder="Enter brewer tips" ></input>
            <p className="form-copy">Attenuation level:</p>
            <input className="form-field" name="attenuation_level" type="number" placeholder="Enter attenuation level"  ></input>
            <p className="form-copy">Description:</p>
            <input className="form-field-description" name="description"  type="text" placeholder="Enter description" ></input>
            <button className="form-button" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default  NewBeer;