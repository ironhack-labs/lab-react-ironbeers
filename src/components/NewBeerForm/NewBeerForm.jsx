import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.services"


const NewBeerForm = () => {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        beersService
            .saveBeer(coasterData)
            .then(() => {
                updateList()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>

        </Form>
    )

}
export default NewBeerForm