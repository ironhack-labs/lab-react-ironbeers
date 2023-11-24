import beerService from "../../services/beer.services";
import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const AddBeerPage = () => {

    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const handleForm = e => {
        const { value, name } = e.currentTarget

        setBeerData({ ...beerData, [name]: value })
    }

    const saveBeer = e => {
        e.preventDefault()

        beerService
            .postNewBeer(beerData)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="AddBeerPage">
            <Form onSubmit={saveBeer}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='text' value={beerData.name} name='name' onChange={handleForm} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tagline:</Form.Label>
                    <Form.Control type='text' value={beerData.tagline} name='tagline' onChange={handleForm} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type='text' value={beerData.description} name='description' onChange={handleForm} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>First Brewed:</Form.Label>
                    <Form.Control ttype='text' value={beerData.first_brewed} name='first_brewed' onChange={handleForm} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Brewer's Tips:</Form.Label>
                    <Form.Control type='text' value={beerData.brewers_tips} name='brewers_tips' onChange={handleForm} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Attenuation Level:</Form.Label>
                    <Form.Control type='number' value={beerData.attenuation_level} name='attenuation_level' onChange={handleForm} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Contributed By:</Form.Label>
                    <Form.Control type='text' value={beerData.contributed_by} name='contributed_by' onChange={handleForm} />
                </Form.Group>

                <Button variant="dark" type="submit">Create Beer</Button>
            </Form>
        </div>

    )

}

export default AddBeerPage