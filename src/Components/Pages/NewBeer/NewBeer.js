import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import BeersService from '../../../Services/Beers.service'

const beersService = new BeersService()
export default function NewBeer() {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [brewed, setBrewed] = useState('')
    const [tips, setTips] = useState('')
    const [attenuation, setAttenuation] = useState('')
    const [contributed, setContributed] = useState('')

    const clearState = () => {
        setName("")
        setTagline("")
        setDescription("")
        setBrewed('')
        setTips('')
        setAttenuation('')
        setContributed('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        beersService.getNewBeer({ name, tagline, description, brewed, tips, attenuation, contributed })

            .then(() => {
                clearState()
            })
            .catch(err => console.error(err))

    }

    const handleChange = (e) => {
        const { value, name } = e.target

        switch (name) {
            case "name":
                setName(value)
                break;
            case "tagline":
                setTagline(value)
                break;
            case "description":
                setDescription(value)
                break;
            case "brewed":
                setBrewed(value)
                break;
            case "tips":
                setTips(value)
                break;
            case 'attenuation':
                setAttenuation(value)
                break;
            case 'contributed':
                setContributed(value)
                break;
            default:
        }

    }



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="name" value={name} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline">
                    <Form.Label>Tagline:</Form.Label>
                    <Form.Control onChange={(e) => handleChange(e)} name="tagline" value={tagline} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control onChange={(e) => (handleChange(e))} name="description" value={description} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="brewed">
                    <Form.Label>Brewed:</Form.Label>
                    <Form.Control onChange={(e) => (handleChange(e))} name="brewed" value={brewed} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tips">
                    <Form.Label>Tips:</Form.Label>
                    <Form.Control onChange={(e) => (handleChange(e))} name="tips" value={tips} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="attenuation">
                    <Form.Label>Attenuation:</Form.Label>
                    <Form.Control onChange={(e) => (handleChange(e))} name="attenuation" value={attenuation} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contributed">
                    <Form.Label>Contributed:</Form.Label>
                    <Form.Control onChange={(e) => (handleChange(e))} name="contributed" value={contributed} type="text" />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Crear
                </Button>
            </Form>
        </div>
    )
}
