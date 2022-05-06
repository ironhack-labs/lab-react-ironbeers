import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import coastersService from '../../services/coasters.service'
import IronService from './../../services/IronBeers.service'






const NewBeerForm = ({ closeModal, refreshCoasters }) => {

    const [coasterData, setCoasterData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''

    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = coasterData

    const handleInputChange = e => {

        const { value, name } = e.target

        setCoasterData({
            ...coasterData,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        IronService
            .saveCoaster(coasterData)
            .then(({ data }) => {
                closeModal()
                refreshCoasters()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="tagline">
                <Form.Label>tagline</Form.Label>
                <Form.Control type="text" value={tagline} onChange={handleInputChange} name="tagline" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="first_brewed">
                <Form.Label>first_brewed</Form.Label>
                <Form.Control type="text" value={first_brewed} onChange={handleInputChange} name="first_brewed" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="brewers_tips">
                <Form.Label>Ibrewers_tips</Form.Label>
                <Form.Control type="text" value={brewers_tips} onChange={handleInputChange} name="brewers_tips" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="attenuation_level">
                <Form.Label>attenuation_level</Form.Label>
                <Form.Control type="number" value={attenuation_level} onChange={handleInputChange} name="attenuation_level" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contributed_by">
                <Form.Label>Imagen (pega la URL)</Form.Label>
                <Form.Control type="text" value={contributed_by} onChange={handleInputChange} name="contributed_by" />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </div>

        </Form >
    )

}

export default NewBeerForm