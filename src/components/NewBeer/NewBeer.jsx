import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { newBeer } from "../../services/BeersService";

import  './NewBeer.css'

const initialForm = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
}

const NewBeer = () => {
    const [data, setData] = useState(initialForm)
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = data
        
        if ( name && tagline && description && first_brewed && brewers_tips && attenuation_level && contributed_by) {
            newBeer(data)
            .then(navigate('/beers'))
        }
    }

    return (
        <div className="form-div">
            <form action="/beers/new'" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handleChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label>Tagline</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" onChange={handleChange} placeholder="" />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" id="description" name="description" onChange={handleChange} rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label>First Brewed</label>
                    <input type="text" className="form-control" id="first_brewed" name="first_brewed" onChange={handleChange} placeholder="" />
                </div>

                <div className="form-group">
                    <label>Brewers Tips</label>
                    <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" onChange={handleChange} placeholder="" />
                </div>

                <div className="form-group">
                    <label>Attenuation Level</label>
                    <input type="number" className="form-control" id="attenuation_level" name="attenuation_level" onChange={handleChange} placeholder="" />
                </div>

                <div className="form-group">
                    <label>Contributed By</label>
                    <input type="text" className="form-control" id="contributed_by" name="contributed_by" onChange={handleChange} placeholder="" />
                </div>

                <button type="submit" className="btn ">ADD NEW</button>
            </form>
        </div>
    )
}

export default NewBeer


