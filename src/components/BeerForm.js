import axios from 'axios'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'




const BeerForm = () => {

    const [setBeer, setBeerData] = useState({
        name: '',
       tagline: '',
        description: "",
        first_brewed: "",
       brewers_tips: '',
       attenuation_level: 0,
       contributed_by: ""
    })

    const { name, description, tagline, first_brewed, brewers_tips, attenuation_level,contributed_by } = setBeer

    const handleInputChange = e => {

        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = e.target

        setBeerData({
            ...setBeer,
            // [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

      axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
           name, description, tagline, first_brewed, brewers_tips, attenuation_level,contributed_by 
      })
      .then((x) => console.log(x))
      .catch(x => console.log(x))
        

    
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="length">
                <Form.Label>Longitud (m)</Form.Label>
                <Form.Control type="number" value={tagline} onChange={handleInputChange} name="length" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="inversions">
                <Form.Label>Inversiones</Form.Label>
                <Form.Control type="number" value={first_brewed} onChange={handleInputChange} name="inversions" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (pega la URL)</Form.Label>
                <Form.Control type="url" value={brewers_tips} onChange={handleInputChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </div>

        </Form>
    )

}

export default BeerForm