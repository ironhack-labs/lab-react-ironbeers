import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function CreateBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState("0");
    const [contributed_by, setContributedBy] = useState("");


    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            attenuation_level,
            contributed_by
        };

        axios
            .post(process.env.REACT_APP_API_BASE_URL + '/new', newBeer)
            .then(response => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setAttenuationLevel("0");
                setContributedBy("")
                navigate("/beers", { replace: true });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <>
            <NavBar />
            <Form onSubmit={handleSubmit}>

                <Form.Group className="my-3 mx-5">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>

                <Form.Group className="my-3 mx-5">
                    <Form.Label>Tagline</Form.Label>
                    <Form.Control value={tagline} type="text" onChange={(e) => { setTagline(e.target.value) }} />
                </Form.Group>

                <Form.Group className="my-3 mx-5">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} type="text" cols="30" rows="4" onChange={(e) => { setDescription(e.target.value) }} />
                </Form.Group>

                <Form.Group className="my-3 mx-5">
                    <Form.Label>First Brewed</Form.Label>
                    <Form.Control value={first_brewed} type="text" onChange={(e) => { setFirstBrewed(e.target.value) }} />
                </Form.Group>

                <Form.Group className="my-3 mx-5">
                    <Form.Label>Attenuation Level</Form.Label>
                    <Form.Control value={attenuation_level} type="number" onChange={(e) => { setAttenuationLevel(e.target.value) }} />
                </Form.Group>

                <Form.Group className="my-3 mx-5">
                    <Form.Label>Contributed By</Form.Label>
                    <Form.Control value={contributed_by} type="text" onChange={(e) => { setContributedBy(e.target.value) }} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ADD NEW
                </Button>
            </Form>
        </>

    );

}

export default CreateBeer;

