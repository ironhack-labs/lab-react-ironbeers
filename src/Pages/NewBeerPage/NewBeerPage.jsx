import axios from "axios"
import { useState } from "react"
import { Button, Form} from "react-bootstrap"
import Nav from "../../components/Navbar/Navbar"


const NewBeer = () => {
    const [beerData, setBeerData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData

   
    const handleInputChange = elm => {

        const { value, name } = elm.target
        console.log(value)

        setBeerData({
            ...beerData, 
            [name]: value,
            
        })
    }

    const handleSubmit = elm => {
        elm.preventDefault()
        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new")
        .then(({data}) =>{
            console.log(data)
        } )
    }


    return (

        <>
            <Nav onSubmit={handleSubmit}/>
            <Form >
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Beer name</Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={handleInputChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tagline ">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control type="text" name="tagline " value={tagline} onChange={handleInputChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="description ">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description " value={description } onChange={handleInputChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="first_brewed ">
                    <Form.Label>First time brewed </Form.Label>
                    <Form.Control type="text" name="first_brewed " value={first_brewed } onChange={handleInputChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="brewers_tips ">
                    <Form.Label>Brewers tips yay </Form.Label>
                    <Form.Control type="text" name="brewers_tips " value={brewers_tips } onChange={handleInputChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="attenuation_level ">
                    <Form.Label>Attenuation level </Form.Label>
                    <Form.Control type="number" name="attenuation_level " value={attenuation_level } onChange={handleInputChange}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="contributed_by ">
                    <Form.Label>Contributed by </Form.Label>
                    <Form.Control type="text" name="contributed_by " value={contributed_by } onChange={handleInputChange}/>
                </Form.Group>

                <Button type="submit">Submit your beer</Button>

            </Form>
        </>
    )
}

export default NewBeer