import { useState } from "react"
import beerService from "../services/beers.service"

function AddBeerPage() {
    const [beer, setBeers] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const handleInputChange = (event) => {
        const { value, name } = event.currentTarget
        setBeers({ ...beer, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        beerService.postBeer(beer)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={beer.name} name="name" onChange={handleInputChange} />

                <label>Tagline</label>
                <input type="text" value={beer.tagline} name="tagline" onChange={handleInputChange} />

                <label>Description</label>
                <input type="text" value={beer.description} name="description" onChange={handleInputChange} />

                <label>First Brewed</label>
                <input type="text" value={beer.first_brewed} name="first_brewed" onChange={handleInputChange} />

                <label>Brewers Tips</label>
                <input type="text" value={beer.brewers_tips} name="brewers_tips" onChange={handleInputChange} />

                <label>Attenuation Level</label>
                <input type="number" value={beer.attenuation_level} name="attenuation_level" onChange={handleInputChange} />

                <label>Contributed By</label>
                <input type="text" value={beer.contributed_by} name="contributed_by" onChange={handleInputChange} />

                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage
