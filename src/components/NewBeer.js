import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handlesetBrewersTipsInput = (e) => setBrewersTips(e.target.value);
  const handlesetAttenuationLevelInput = (e) => setAttenuationLevel(e.target.value);
  const handlesetContributedByInput = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    console.log(newBeer);

    axios
      .post("https://ih-beers-api2.herokuapp.com/new-beer", newBeer)
      .then((response) => {
        console.log(response.data);

        props.addNewBeer(response.data);

        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");

        window.location.href = "/beers";
      })
      .catch((error) => {
        console.log("Error creating new beer:", error);
      });
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          placeholder="Alice"
          onChange={handleNameInput}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tagline</Form.Label>
        <Form.Control
          type="text"
          value={tagline}
          placeholder="Dry-Hopped Aggressive Porter"
          onChange={handleTaglineInput}
          name="tagline"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={handleDescriptionInput}
          name="description"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>First brewed</Form.Label>
        <Form.Control
          type="text"
          value={firstBrewed}
          placeholder="01/2012"
          onChange={handleFirstBrewedInput}
          name="firstBrewed"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Brewers tips</Form.Label>
        <Form.Control
          type="text"
          value={brewersTips}
          placeholder="shake before serving"
          onChange={handlesetBrewersTipsInput}
          name="brewersTips"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Attenuation level</Form.Label>
        <Form.Control
          type="number"
          value={attenuationLevel}
          placeholder="70.1"
          onChange={handlesetAttenuationLevelInput}
          name="attenuationLevel"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contributed by</Form.Label>
        <Form.Control
          type="text"
          value={contributedBy}
          placeholder="Sam Mason"
          onChange={handlesetContributedByInput}
          name="contributedBy"
        />
      </Form.Group>

      <Button
        type="submit"
        style={{ backgroundColor: "grey", borderStyle: "none" }}
      >
        {" "}
        ADD BEER{" "}
      </Button>
    </Form>
  );
}

export default NewBeer;
