import React, { useState } from 'react'
import axios from 'axios'

export default function NewBeerForm(props) {

    const [value, setValue] = useState(
        {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    )

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue({
            ...value,
            [name]: value
        })


        console.log('CHANGED', value)
    };

    const handleSubmit = (event) => {


        event.preventDefault()
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', value
            )
            .catch((err) => console.log(err));
        props.history.push('/beers')
        console.log('SUBMITED', value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" value={value.name} name="name" placeholder="Enter name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="tagline">Tagline:</label>
                <input type="text" value={value.tagline} name="tagline" placeholder="Enter tagline" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" value={value.description} name="description" placeholder="Enter description" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="first_brewed">First brewed:</label>
                <input type="text" value={value.first_brewed} name="first_brewed" placeholder="Enter first_brewed" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="brewers_tips">Brewers tips:</label>
                <input type="text" value={value.brewers_tips} name="brewers_tips" placeholder="Enter brewers_tips" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="attenuation_level">Attenuation level:</label>
                <input type="number" min="0" value={value.attenuation_level} name="attenuation_level" placeholder="Enter tagline" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="contributed_by">Contributed by:</label>
                <input type="text" value={value.contributed_by} name="contributed_by" placeholder="Enter contributed by" onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>

        </form>
    )
}
