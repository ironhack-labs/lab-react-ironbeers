import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function CreateBeer(props) {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [attenuation, setAttenuation] = useState(0);
    const [description, setDescription] = useState("");
    const [contributor, setContributor] = useState("");
    const [brewerTips, setBrewerTips] = useState("");

    const navigate = useNavigate();  //useNavigate cannot be called inside a callback



    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewerTips,
            attenuation_level: attenuation,
            contributed_by: contributor
        }

        props.update((prevBeers) => {
            return [body, ...prevBeers];
        })

        axios.post(process.env.REACT_APP_BASE_URL + '/beers/new', body)
            .then((response) => {
                setName("")
                setTagline("")
                setFirstBrewed("")
                setAttenuation(0)
                setDescription("")
                setContributor("")
                setBrewerTips("")
                navigate("/beers")
            })
            .catch((e) => {
                console.log(e)
            })
    }



    return (
        <>
            <Navbar />

            <Container>
                <h2 style={{ marginTop: '5rem' }}>Create a New Beer</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group style={{ marginTop: '5rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>Name</strong></Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: '2rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>Tagline</strong></Form.Label>
                        <Form.Control type="text" value={tagline} onChange={(e) => setTagline(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: '2rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>Description</strong></Form.Label>
                        <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: '2rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>First Brewed</strong></Form.Label>
                        <Form.Control type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: '2rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>Brewer Tips</strong></Form.Label>
                        <Form.Control type="text" value={brewerTips} onChange={(e) => setBrewerTips(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: '2rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>Attenuation Level</strong></Form.Label>
                        <Form.Control type="number" value={attenuation} onChange={(e) => setAttenuation(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group style={{ marginTop: '2rem' }}>
                        <Form.Label style={{ fontSize: '1rem' }}><strong>Contributed By</strong></Form.Label>
                        <Form.Control type="text" value={contributor} onChange={(e) => setContributor(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant='btn btn-outline-dark' style={{ marginTop: '2rem', padding: '0rem 2.5rem' }}>Add New</Button>
                </Form>
            </Container>

        </>
    )
}

export default CreateBeer; 