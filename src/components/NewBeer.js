import React, { useState }  from 'react'
import axios from 'axios'

const NewBeer = props => {

    const initialState = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

    const [state, setState] = useState(initialState)

    const handleChange = (event) => {
        const { value, id } = event.target
        setState(state => ({
            ...state,
            [id]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", state)
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
        props.history.push('/beers')
    }

    // console.log(props)

    return (
        <form onSubmit={handleSubmit} className="m-3">
            <div className="form-group">
                <label htmlFor="name">Beer name:</label>
                <input type="text" className="form-control" value={state.name} id="name" placeholder="Enter name" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="tagline">Beer tagline:</label>
                <input type="text" className="form-control" value={state.tagline} id="tagline" placeholder="Enter tagline" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Beer description:</label>
                <input type="text" className="form-control" value={state.description} id="description" placeholder="Enter description" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="first_brewed">Beer first_brewed:</label>
                <input type="text" className="form-control" value={state.first_brewed} id="first_brewed" placeholder="Enter first_brewed" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="brewers_tips">Beer brewers_tips:</label>
                <input type="text" className="form-control" value={state.brewers_tips} id="brewers_tips" placeholder="Enter brewers_tips" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="attenuation_level">Beer attenuation_level:</label>
                <input type="number" min="0" className="form-control" value={state.attenuation_level} id="attenuation_level" placeholder="Enter tagline" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="contributed_by">Beer contributed_by:</label>
                <input type="text" className="form-control" value={state.contributed_by} id="contributed_by" placeholder="Enter contributed_by" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Sends</button>
        </form>
    )
}

export default NewBeer
