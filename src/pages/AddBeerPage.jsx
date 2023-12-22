import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstbrewed, setFirstBrewed] = useState("");
  const [brewertips, setBrewertips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstbrewed,
        brewer_tips: brewertips,
        attenuation: attenuation,
        contributed_by: contributedBy,
      })
      .then((resp) => {
        console.log(resp);
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewertips("");
        setAttenuation(0);
        setContributedBy("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="form" method="post">
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
          />
        </Form.Group>

        <Form.Group controlId="tagline">
          <Form.Label>Tagline:</Form.Label>
          <Form.Control
            onChange={(e) => setTagline(e.target.value)}
            type="text"
            name="tagline"
            value={tagline}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            name="description"
            rows="4"
            cols="50"
            value={description}
          />
        </Form.Group>

        <Form.Group controlId="first_brewed">
          <Form.Label>First Brewed:</Form.Label>
          <Form.Control
            onChange={(e) => setFirstBrewed(e.target.value)}
            type="text"
            name="first_brewed"
            value={firstbrewed}
          />
        </Form.Group>

        <Form.Group controlId="brewers_tips">
          <Form.Label>Brewers Tips:</Form.Label>
          <Form.Control
            onChange={(e) => setBrewertips(e.target.value)}
            type="text"
            name="brewers_tips"
            value={brewertips}
          />
        </Form.Group>

        <Form.Group controlId="attenuation_level">
          <Form.Label>Attenuation Level:</Form.Label>
          <Form.Control
            onChange={(e) => setAttenuation(e.target.value)}
            type="number"
            name="attenuation_level"
            value={attenuation}
          />
        </Form.Group>

        <Form.Group controlId="contributed_by">
          <Form.Label>Contributed By:</Form.Label>
          <Form.Control
            onChange={(e) => setContributedBy(e.target.value)}
            type="text"
            name="contributed_by"
            value={contributedBy}
          />
        </Form.Group>

        <Button type="submit">Add Beer</Button>
      </Form>
    </div>
  );
}

export default AddBeerPage;