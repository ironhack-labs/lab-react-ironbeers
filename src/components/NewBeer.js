import React from 'react'

export default function NewBeer(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <input name="image" type="image" placeholder="Add image link"></input>
            <input name="name" type="text" placeholder="Enter Name"></input>
            <input name="tagline" type="text" placeholder="Enter tagline"></input>
            <input name="first_brewed" type="text" placeholder="Enter first_brewed"></input>
            <input name="attenuation_level" type="text" placeholder="Enter attenuation_level"></input>
            <input name="description" type="text" placeholder="Enter Description"></input>
            <input name="contributed_by" type="text" placeholder="Enter contributed_by"></input>
            <button type="submit">Create</button>
        </form>
    )
}

export default NewBeer