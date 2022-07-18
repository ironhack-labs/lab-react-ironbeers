import React from "react";
import newBeer from '../assets/new-beer.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useState } from 'react';


const NewBeer = (props) => {
  const [show, setShow] = useState(false);

  // bootstrap
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // adding newbeer states
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState('');


  const handleSubmit = event => {
    
    event.preventDefault()


    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }
    console.log(newBeer)
    axios({
      method: 'post',
      url: 'https://ih-beers-api2.herokuapp.com/beers/new',
      data: newBeer
    })
    .then(response => {
      console.log(response)
    })
  
    setName('')
    setTagline('')
    setDescription("")
    setFirstBrewed('')
    setBrewersTips('')
    setAttenuationLevel('')
    setContributedBy("")

  }

  const handleNewBeerNameChange = event => {
    setName(event.target.value)
  }

  const handleNewTaglineChange = event => {
    setTagline(event.target.value)
  }

  const handleNewDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const handleNewFirstBrewedChange = event => {
    setFirstBrewed(event.target.value)
  }

  const handleNewBrewersTipsChange = event => {
    setBrewersTips(event.target.value)
  }

  const handleNewAttenuationLevelChange = event => {
    setAttenuationLevel(event.target.value)
  }

  const handleNewContributedByChange = event => {
    setContributedBy(event.target.value)
  }

  return (
    <>
      
      <img className="card-img-top" src={newBeer} alt="new-beer"/>
      <h2 className="px-3 mt-1 fw-light text-black">New Beers</h2>
      
      <p className="px-3 text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <Button variant="info text-white mx-3 px-5"  onClick={handleShow}>
        Create new Beer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <label htmlFor="recipient-name" className="col-form-label mt-2">Name of the beer:</label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                autoFocus
                onChange={handleNewBeerNameChange}
              />
            <label htmlFor="recipient-name" className="col-form-label mt-2">Tagline:</label>
            <Form.Control
                type="text"
                placeholder="Tagline"
                name="tagline"
                value={tagline}
                className="mt-0"
                as="textarea"
                rows={3}
                onChange={handleNewTaglineChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">Description:</label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                className="mt-0"
                onChange={handleNewDescriptionChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">First Brewed:</label>
              <Form.Control
                type="text"
                placeholder="First brewed"
                value={first_brewed}
                className="mt-0"
                name="first_brewed"
                onChange={handleNewFirstBrewedChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">Brewers Tips:</label>
              <Form.Control
                type="text"
                placeholder="Brewers tips"
                value={brewers_tips}
                name="brewers_tips"
                className="mt-0"
                onChange={handleNewBrewersTipsChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">Attenuation level:</label>
              <Form.Control
                type="number"
                placeholder="Attenuation level "
                value={attenuation_level}
                className=""
                name="attenuation_level"
                onChange={handleNewAttenuationLevelChange}
                autoFocus
              />
              <Form.Control
                type="text"
                placeholder="Contributed by:"
                value={contributed_by}
                className="mt-3"
                name="contributed_by"
                onChange={handleNewContributedByChange}
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="info text-white col-6 mx-auto" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewBeer;