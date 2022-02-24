import axios from "axios"
import { useState } from "react"
import Header from '../../components/Header/Header'

const NewBeer = () => {

    const [newBeerData, setNewBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = newBeerData

    const handleInputChange = e => {

        const { value, name } = e.target

        setNewBeerData({
            ...newBeerData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeerData)
    }

    return (
        <section className="newBeerForm">

            <Header />

            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input type="text" name="name" value={name} onChange={handleInputChange} />

                <label>Tagline </label>
                <input type="text" name="tagline" value={tagline} onChange={handleInputChange} />

                <label>Description </label>
                <input type="text" name="description" value={description} onChange={handleInputChange} />

                <label>First Brewed </label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={handleInputChange} />

                <label>Brewers Tips </label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={handleInputChange} />

                <label>Attenuation Level </label>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleInputChange} />

                <label>Contributed By </label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={handleInputChange} />

                <button type="submit">ADD NEW</button>
            </form>
        </section>
    )
}

export default NewBeer