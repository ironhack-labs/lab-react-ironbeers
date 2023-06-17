import { useState } from "react"
import { Col, Row, Button, Form} from "react-bootstrap"
import beerServices from "../services/beer.service"

function NewBeerPage() {
    const clearInputs = {
        name: "",
        tagline: "",
        first_brewed: "",
        description: "",
        contributed_by: "",
        attenuation_level: 0,
        brewers_tips: "",
    }
    const [data, setData] = useState(clearInputs)
    const handleChange = (e)=>{
        setData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            await beerServices.create(data)
            setData(clearInputs)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Row className="justify-content-center">
            <h6>Create new beer</h6>
            <Col sm={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-1">
                        <Form.Control
                         type="text" value={data.name}
                         placeholder="Name" name="name" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Control
                            type="text" value={data.tagline}
                            placeholder="Tagline" name="tagline" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Control
                            type="text" value={data.first_brewed}
                            placeholder="First brewed" name="first_brewed" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Control
                            type="text" value={data.description}
                            placeholder="Description" name="description" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Control
                            type="text" value={data.contributed_by}
                            placeholder="Contributed by" name="contributed_by" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Control
                            type="number" min={0} value={data.attenuation_level}
                            placeholder="Attenuation level" name="attenuation_level" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Control
                            type="text" value={data.brewers_tips}
                            placeholder="Brewers tips" name="brewers_tips" onChange={handleChange} />
                    </Form.Group>
                    

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default NewBeerPage