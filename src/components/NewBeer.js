import { Button, Form, Container, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attLevel, setAttLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const formatDate = (date) => {
    const [year, month] = date.split("-");
    const newDate = new Date(`${year}-${month}-01`);
    const formattedMonth = String(newDate.getMonth() + 1).padStart(2, "0");
    const formattedYear = newDate.getFullYear();
    setFirstBrewed(`${formattedMonth}/${formattedYear}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: firstBrewed,
      brewer_tips: e.target.brewerTips.value,
      attenuation_level: e.target.attLevel.value,
      contributed_by: e.target.contributedBy.value,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/new`, newBeer)
      .then((res) => {
        window.location.href = "/beers";
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <Col className="col-xl-4 col-lg-6 col-md-10 col-sm-12 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tagline">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              required
              value={tagline}
              type="text"
              placeholder="Enter Tagline"
              onChange={(e) => {
                setTagline(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              value={description}
              style={{ resize: "none" }}
              maxLength={1000}
              as="textarea"
              rows={5}
              type="text"
              placeholder="Enter Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="firstBrewed">
            <Form.Label>First Brewed</Form.Label>
            <Form.Control
              required
              type="month"
              placeholder="Brewed Date"
              onChange={(e) => {
                formatDate(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brewerTips">
            <Form.Label>Brewer Tips</Form.Label>
            <Form.Control
              required
              value={brewerTips}
              type="text"
              placeholder="Enter Tips"
              onChange={(e) => {
                setBrewerTips(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="attLevel">
            <Form.Label>Attenuation Level</Form.Label>
            <Form.Control
              required
              value={attLevel}
              max={100}
              min={0}
              type="number"
              placeholder="Enter Attenuation"
              onChange={(e) => {
                setAttLevel(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contributedBy">
            <Form.Label>Contributed By</Form.Label>
            <Form.Control
              required
              value={contributedBy}
              type="text"
              placeholder="Enter Contributor"
              onChange={(e) => {
                setContributedBy(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add New
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
