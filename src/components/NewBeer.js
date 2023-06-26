import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

function NewBeer() {

    const baseURL = "https://ih-beers-api2.herokuapp.com/beers";
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBeer = {
          name: event.target.name.value,
          tagline: event.target.tagline.value,
          description: event.target.description.value,
          first_brewed: event.target.firstBrewed.value,
          brewers_tips: event.target.brewersTips.value,
          attenuation_level: event.target.attenuationLevel.value,
          contributed_by: event.target.contributedBy.value,
        };

        axios
          .post(`${baseURL}/new`, newBeer)
          .then(() => {
            window.location.href = "/beers";
          })
          .catch((e) => {
            console.log(e);
          });
      };

    return(
        <div>
        <Header />
        <container>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" placeholder="Name" required value={name} 
          onChange={(event) => {
            setName(event.target.value);
          }}/>
          </Form.Group>
          <Form.Group className="mb-4" controlId="tagline">
          <Form.Control type="text" placeholder="Tagline"  required value={tagline}
          onChange={(event) => {
            setTagline(event.target.value);
          }}/>  
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
          <Form.Control as="textarea" rows={3} placeholder="Description" required value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="firstBrewed">
          <Form.Control type="text" placeholder="First Brewed" required value={firstBrewed}
          onChange={(event) => {
            setFirstBrewed(event.target.value);
          }}/>  
          </Form.Group>
          <Form.Group className="mb-3" controlId="brewersTips">      
          <Form.Control as="textarea" rows={3} placeholder="Brewers Tips" required value={brewersTips}
          onChange={(event) => {
            setBrewersTips(event.target.value);
          }}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="attenuationLevel">
          <Form.Control type="number" placeholder="Attenuation Level" required value={attenuationLevel}
          onChange={(event) => {
            setAttenuationLevel(event.target.value);
          }}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contributedBy">
          <Form.Control type="text" placeholder="Contributed By" required value={contributedBy}
          onChange={(event) => {
            setContributedBy(event.target.value);
          }}/>  
        </Form.Group>
        <Button variant="outline-primary" type="submit">
            Submit New Beer
          </Button>
      </Form>
      </container>
      </div>
    )
}

export default NewBeer