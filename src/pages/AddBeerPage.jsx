import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function AddBeerPage() {

    const [beersData, setBeersData] = useState({
        name: '',
        tagline: '',
        first_brewed: '',
        description: '',
        attenuation_level: 0,
        brewers_tips: '',

    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setBeersData({ ...beersData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', beersData)
            .then(() => {
                console.log('SE AGREGA ....')

            })
            .catch(err => console.log(err))


    }

    return (
        <div className="AddBeerForm" onSubmit={handleFormSubmit}>
            <form>
                <label>Name:</label>
                <input type="text" value={beersData.name} name="name" onChange={handleInputChange} />
                <br /><br />

                <label>Tangline:</label>
                <input type="text" value={beersData.tagline} name="tagline" onChange={handleInputChange} />
                <br /><br />

                Description: <input type="text" value={beersData.description} name="description" onChange={handleInputChange} />
                <br /><br />

                First Brewed: <input type="text" value={beersData.first_brewed} name="first_brewed" onChange={handleInputChange} />
                <br /><br />

                Brewrs's: <input type="text" value={beersData.brewers_tips} name="brewers_tips" onChange={handleInputChange} />
                <br /><br />

                Attenuation Level: <input type="number" value={beersData.attenuation_level} name="attenuation_level" onChange={handleInputChange} />
                <br /><br />

                Contributed By: <input type="text" value={beersData.ontributed_by} name="contributed_by" onChange={handleInputChange} />
                <br /><br />


                <input type="submit" value="Crear Cervesa" />

            </form>
            <Link to={'/beers'}> VER LISTA </Link>
        </div>
    )

}

export default AddBeerPage
