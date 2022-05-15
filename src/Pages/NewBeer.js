import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import beersService from "../services/beersService"

function NewBeer() {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    })

    const navigate = useNavigate()

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

    const handleInputChange = e => {
        const { value, name } = e.target

        setBeerData({
            ...beerData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        beersService
            .saveBeer(beerData)
            .then(({ data }) => {
                navigate(`/beers`)
            })
            .catch(e => console.log("error creating beer in the API", e))
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type="text" value={beerData.name} onChange={handleInputChange} name="name" />
                <br></br>
                <br></br>
                <label>tagline</label>
                <input type="text" value={beerData.tagline} onChange={handleInputChange} name="tagline" />
                <br></br>
                <br></br>
                <label>Description</label>
                <input type="text" value={beerData.description} onChange={handleInputChange} name="description" />
                <br></br>
                <br></br>
                <label>First Brewed</label>
                <input type="text" value={beerData.first_brewed} onChange={handleInputChange} name="first_brewed" />
                <br></br>
                <br></br>
                <label>Brewers Tips</label>
                <input type="text" value={beerData.brewers_tips} onChange={handleInputChange} name="brewers_tips" />
                <br></br>
                <br></br>
                <label>Attenuation Level</label>
                <input type="number" value={beerData.attenuation_level} onChange={handleInputChange} name="attenuation_level" />
                <br></br>
                <br></br>
                <label>Contributed By</label>
                <input type="text" value={beerData.contributed_by} onChange={handleInputChange} name="contributed_by" />
                <br></br>
                <br></br>
                <div>
                    <button variant="dark" type="submit">Create beer</button>
                </div>
            </form>
        </div>
    )
}

export default NewBeer