import { useState } from "react"

function AddBeerPage() {
    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function submitNewBeer(event) {
        event.preventDefault();
        try {
            await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData), // Send the form data as JSON)
            })
        } catch (err) {
            console.log('Error adding new beer: ' + err)
        }
    }

    return (
        <form onSubmit={submitNewBeer}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}></input><br />
            <label>Tagline</label>
            <input type="text" name="tagline" value={formData.tagline} onChange={handleChange}></input><br />
            <label>Description</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange}></input><br />
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange}></input><br />
            <label>Brewer`&apos;`s Tips</label>
            <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange}></input><br />
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange}></input><br />
            <label>Contributed By</label>
            <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange}></input><br />
            <button type="submit">ADD NEW</button>
        </form>
    )
}

export default AddBeerPage;
