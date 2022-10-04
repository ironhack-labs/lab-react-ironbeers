import Header from "./Header"
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"

const NewBeer = () => {
    const navigate = useNavigate()
    const [state,setState] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })
    const updateState = event => setState ({
        ...state,
        [event.target.name] : event.target.value
    })
    const handleSubmit = event => {
        event.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', state)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
    }
    return (
        <div>
            <Header />
            <form className="beer-form" onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input name='name' type='text' value={state.name} onChange={updateState}/>
                </div>
                <div>
                    <label>Tagline</label>
                    <input name="tagline" type='text' value={state.tagline} onChange={updateState}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" className="beer-description" type='text' value={state.description} onChange={updateState}/>
                </div>
                <div>
                    <label>First Brewed</label>
                    <input name="first_brewed" type='text' value={state.first_brewed} onChange={updateState}/>
                </div>
                <div>
                    <label>BrewerTips</label>
                    <input name="brewers_tips" type='text' value={state.brewers_tips} onChange={updateState}/>
                </div>
                <div>
                    <label>Attenuation Level</label>
                    <input name="attenuation_level" type='number' value={state.attenuation_level} onChange={updateState}/>
                </div>
                <div>
                    <label>Contributed By</label>
                    <input name="contributed_by" type='text' value={state.contributed_by} onChange={updateState}/>
                </div>
                <button type='submit' className="add-button">ADD NEW</button>
            </form>
        </div>
    )
}

export default NewBeer