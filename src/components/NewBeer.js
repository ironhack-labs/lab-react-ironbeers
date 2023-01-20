import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Header } from "./Header";

export function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post(process.env.REACT_APP_API_URL + "/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        navigate("/beers");
      })
      .catch((error) => {
        console.log("Error while creating a new apartment: ", error);
      });
  };

  return (
    <div>
      <Header />
      <h1>Create a beer</h1>
      <div className="mt-5 d-flex justify-content-center">
        <Card className="p-5 w-50">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Form.Label>Tagline:</Form.Label>
              <Form.Control
                type="text"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />

              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Form.Label>First Brewed:</Form.Label>
              <Form.Control
                type="text"
                name="first_brewed"
                value={first_brewed}
                onChange={(e) => setFirstBrewed(e.target.value)}
              />

              <Form.Label>Brewer's Tips:</Form.Label>
              <Form.Control
                type="text"
                name="brewers_tips"
                value={brewers_tips}
                onChange={(e) => setBrewersTips(e.target.value)}
              />

              <Form.Label>Attenuation Level:</Form.Label>
              <Form.Control
                type="number"
                name="attenuation_level"
                value={attenuation_level}
                onChange={(e) => setAttenuationLevel(e.target.value)}
              />

              <Form.Label>Created By:</Form.Label>
              <Form.Control
                type="text"
                name="contributed_by"
                value={contributed_by}
                onChange={(e) => setContributedBy(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Create
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}
