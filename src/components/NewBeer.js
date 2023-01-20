import Header from "./Header";
import { Button, Card, Form } from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function NewBeer(props) {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")



    // creating a new apartment listing
    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeerDetails = {
            name,
            tagline, 
            description, 
            first_brewed, 
            brewers_tips, 
            attenuation_level, 
            contributed_by
        }

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerDetails)
            .then((response) => {
                console.log(response.data);
                navigate("/beers");
            })
            .catch((error) => {
                console.log('Error creating a new beer', error);
            });

        props.createCallback(newBeerDetails);

        //clear form
        setName(""); 
        setTagline(""); 
        setDescription(""); 
        setFirstBrewed("");  
        setBrewersTips(""); 
        setAttenuationLevel(0);
        setContributedBy("");
        }

  return (
    <>
        <Header />
        <Card border="light" style={{ width: "30%", margin: "auto", marginTop: "50px", padding: "5px" }} >
            <Form onSubmit={handleSubmit}>
                <Form.Label >Name</Form.Label>   
                <Form.Control type="text"
                    required={true}
                    name="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} 
                />

                <Form.Label>Tagline</Form.Label>   
                <Form.Control type="text" 
                    name="tagline"
                    value={tagline}
                    onChange={(e) => { setTagline(e.target.value) }} 
                />

                <Form.Label>Description</Form.Label>   
                <Form.Control as="textarea" rows={5} 
                    name="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} 
                />

                <Form.Label>First Brewed</Form.Label>   
                <Form.Control type="number" 
                    name="first_brewed"
                    value={first_brewed}
                    onChange={(e) => { setFirstBrewed(e.target.value) }} 
                />

                <Form.Label>Brewers Tips</Form.Label>   
                <Form.Control type="text" 
                    name="brewers_tips"
                    value={brewers_tips}
                    onChange={(e) => { setBrewersTips(e.target.value) }} 
                />

                <Form.Label>Attenuation Level</Form.Label>   
                <Form.Control type="number" 
                    name="attenuation_level"
                    value={attenuation_level}
                    onChange={(e) => { setAttenuationLevel(e.target.value) }} 
                />

                <Form.Label>Contributed By</Form.Label>   
                <Form.Control type="text" 
                    name="contributed_by"
                    value={contributed_by}
                    onChange={(e) => { setContributedBy(e.target.value) }} 
                />
                
                <Button type="submit" variant="dark" style={{marginTop: "15px"}} >Create</Button>

            </Form>
        </Card>
    </>
    
  );
}
