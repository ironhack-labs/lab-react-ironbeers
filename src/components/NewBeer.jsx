import { useState } from 'react'

const NewBeer = () => {
    const [beernew, setBeernew] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setBeernew({ ...beernew, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(beernew),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='newbeer-container'>
            <form onSubmit={handleSubmit} className='formulario'>
                <label htmlFor="name">Nombre:</label><br />
                <input type="text" id="name" name="name" onChange={handleInputChange} /><br />

                <label htmlFor="tagline">Eslogan:</label><br />
                <input type="text" id="tagline" name="tagline" onChange={handleInputChange} /><br />

                <label htmlFor="description">Descripción:</label><br />
                <input type="text" id="description" name="description" onChange={handleInputChange} /><br />

                <label htmlFor="first_brewed">Primera vez elaborado:</label><br />
                <input type="text" id="first_brewed" name="first_brewed" onChange={handleInputChange} /><br />

                <label htmlFor="brewers_tips">Consejos del cervecero:</label><br />
                <input type="text" id="brewers_tips" name="brewers_tips" onChange={handleInputChange} /><br />

                <label htmlFor="attenuation_level">Nivel de atenuación:</label><br />
                <input type="number" id="attenuation_level" name="attenuation_level" onChange={handleInputChange} /><br />

                <label htmlFor="contributed_by">Contribuido por:</label><br />
                <input type="text" id="contributed_by" name="contributed_by" onChange={handleInputChange} /><br />

                <input id='boton-enviar' type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default NewBeer