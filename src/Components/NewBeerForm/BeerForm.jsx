import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import beersService from "../../service/beerServices"
import { Navigate } from "react-router-dom"


const BeerForm = () => {


    const [success, setSuccess] = useState(false)

    const [values, setValues] = useState({

        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        contributed_by: "",
        brewers_tips: "",
        attenuation_level: 0
    })

    const { name, tagline, description, first_brewed, contributed_by, brewers_tips, attenuation_level } = values


    const handleInput = e => {
        const { value, name } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()

        beersService
            .createNewBeer(values)
            .then(() => setSuccess(true))
            .catch(err => console.log(err))
    }

    return (

        <>
            {!success ?
                <><Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} name={"name"} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTagline">
                        <Form.Label>tagline</Form.Label>
                        <Form.Control type="text" value={tagline} name={"tagline"} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} name={"description"} onChange={handleInput} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicFirst">
                        <Form.Label>First brewed</Form.Label>
                        <Form.Control type="text" value={first_brewed} name={"first_brewed"} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" value={contributed_by} name={"contributed_by"} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                        <Form.Label>Brewing tips</Form.Label>
                        <Form.Control as="textarea" rows={3} value={brewers_tips} name={"brewers_tips"} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAttenuation">
                        <Form.Label>Attenuation level</Form.Label>
                        <Form.Control type="number" value={attenuation_level} name={"attenuation_level"} onChange={handleInput} />
                    </Form.Group>



                    <Button variant="info" type="submit">
                        Register
                    </Button>


                </Form></>
                : <><Navigate to="/" /></>}

        </>

    )


}

export default BeerForm 