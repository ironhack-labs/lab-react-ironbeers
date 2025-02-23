import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBeer } from "../services/Beers"

function AddBeerPage() {
    const navigate = useNavigate()
    const [beer, setBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setBeer({
            ...beer,
            [ name ]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addBeer(beer)
            .then(() => {
                navigate("/")
            })
            .catch((err) => console.error(err))       
    }


    return(
        <div>
            <h2> Add Beer </h2>
        <form onSubmit={ handleSubmit }>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} />

            <label htmlFor="tagline">Tagline</label>
        <input type="text" id="tagline" name="tagline" onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" onChange={handleChange} />

        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" id="first_brewed" name="first_brewed" onChange={handleChange} />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" id="brewers_tips" name="brewers_tips" onChange={handleChange} />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" id="attenuation_level" name="attenuation_level" onChange={handleChange} />

        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" id="contributed_by" name="contributed_by" onChange={handleChange} />

        <button type = "submit"> Add Beer </button>

        </form>
        </div>
    )
}
export default AddBeerPage;
