import Header from "./Header"
import axios from 'axios'
import {useState,useEffect} from 'react'

const NewBeer = () => {
    const [state,setState] = useState({
        name: String,
        tagline: String,
        description: String,
        first_brewed: String,
        brewers_tips: String,
        attentuation_level: Number,
        contributed_by: String
    })
    const updateState = event => setState ({
        ...state,
        [event.target.name] : event.target.value
    })
    const handleSubmit = event => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', state)
    }
    return (
        <div>
            <Header />
            <form className="beer-form">
                <div>
                    <label>Name</label>
                    <input />
                </div>
                <div>
                    <label>Tagline</label>
                    <input />
                </div>
                <div>
                    <label>Description</label>
                    <textarea className="beer-description" />
                </div>
                <div>
                    <label>First Brewed</label>
                    <input />
                </div>
                <div>
                    <label>BrewerTips</label>
                    <input />
                </div>
                <div>
                    <label>Attenuation Level</label>
                    <input />
                </div>
                <div>
                    <label>Contributed By</label>
                    <input />
                </div>
                <button className="add-button">ADD NEW</button>
            </form>
        </div>
    )
}

export default NewBeer