import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BeerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === "number" ? parseFloat(value) : value;

    console.log("e.target:", e.target);

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="name" style= {{marginBottom: "20px"}}>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="name"
        className="w-100" // Bootstrap class to make it 100% width
        value={formData.name}
        onChange={(e) => {
          console.log(e.target)
          handleChange(e)
        }}
      />
    </Form.Group>

    <Form.Group controlId="tagline" style= {{marginBottom: "20px"}}>
      <Form.Label>Tagline</Form.Label>
      <Form.Control
        type="text"
        name="tagline"
        className="w-100"
        value={formData.tagline}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="description" style= {{marginBottom: "20px"}}>
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="description"
        className="w-100"
        value={formData.description}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="first_brewed" style= {{marginBottom: "20px"}}>
      <Form.Label>First Brewed</Form.Label>
      <Form.Control
        type="text"
        name="first_brewed"
        className="w-100"
        value={formData.first_brewed}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="brewers_tips" style= {{marginBottom: "20px"}}>
      <Form.Label>Brewer's Tips</Form.Label>
      <Form.Control
        type="text"
        name="brewers_tips"
        className="w-100"
        value={formData.brewers_tips}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="attenuation_level" style= {{marginBottom: "20px"}}>
      <Form.Label>Attenuation Level</Form.Label>
      <Form.Control
        type="number"
        name="attenuation_level"
        className="w-100"
        value={formData.attenuation_level}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="contributed_by" style= {{marginBottom: "20px"}}>
      <Form.Label>Contributed By</Form.Label>
      <Form.Control
        type="text"
        name="contributed_by"
        className="w-100"
        value={formData.contributed_by}
        onChange={handleChange}
      />
    </Form.Group>

    <Button variant="primary" type="submit" className="w-100">
      Add Beer
    </Button>
  </Form>
  );
};

export default BeerForm;

