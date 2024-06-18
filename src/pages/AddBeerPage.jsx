import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { newBeer } from "../services/BeersServices";


function AddBeerPage() {
    const navigate = useNavigate()
    const [beer, setBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    })
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setBeer({
            ...beer,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(),
        newBeer(beer)
        .then(() => {
            navigate("/")
        })
        .catch((error) => console.error(error));
    }
    return (
        <div>
            <h2>Add Beer</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleInputChange}></input>

                <label htmlFor="tagline">Tagline</label>
                <input type="text" id="tagline" name="tagline" onChange={handleInputChange}></input>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" onChange={handleInputChange}></textarea>

                <label htmlFor="first_brewed">First Brewed</label>
                <input type="text" id="first_brewed" name="first_brewed" onChange={handleInputChange} />

                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input type="text" id="brewers_tips" name="brewers_tips" onChange={handleInputChange} />

                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input type="number" id="attenuation_level" name="attenuation_level" onChange={handleInputChange} />

                <label htmlFor="contributed_by">Contributed By</label>
                <input type="text" id="contributed_by" name="contributed_by" onChange={handleInputChange} />

                <button type="submit">Add Beer</button>

            </form>
        </div>
    )
}

export default AddBeerPage;
