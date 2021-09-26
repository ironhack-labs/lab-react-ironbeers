import React from 'react'
import Header from './elements/Header';
import { useState } from "react";
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';


export default function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');

    const handleSubmit = e => {
    e.preventDefault();

    const body = {name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy};


    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body )
      .then(res => {
        console.log(res)
        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed('');
        setBrewersTips('');
        setAttenuationLevel('');
        setContributedBy('');
      })
      .catch(err => {
        console.log(err);
      });

}

return ( 
    <div>
        <Header/>

        <Form onSubmit={handleSubmit} style={{"paddingLeft": "90px", "paddingRight": "90px"}}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control 
                    type="text" name="name" id="name"
                    onChange={e => setName(e.target.value)}
                    value={name} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="tagline">Tagline</Form.Label>
                    <Form.Control 
                    ype="text" name="tagline" id="tagline"
                    onChange={e => setTagline(e.target.value)}
                    value={tagline} 
                    />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control 
                type="text" name="description" id="description"
                onChange={e => setDescription(e.target.value)}
                value={description} 
                />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor="firstBrewed">First Brewed</Form.Label>
                <Form.Control 
                type="text" name="firstBrewed" id="firstBrewed"
                onChange={e => setFirstBrewed(e.target.value)}
                value={firstBrewed} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="attenuationLevel">Attenuation Level</Form.Label>
                <Form.Control 
                type="number" name="attenuationLevel" id="attenuationLevel"
                onChange={e => setAttenuationLevel(e.target.value)}
                value={attenuationLevel} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="contributedBy">Contributed By</Form.Label>
                <Form.Control 
                type="text" name="contributedBy" id="contributedBy"
                onChange={e => setContributedBy(e.target.value)}
                value={contributedBy} 
                />
            </Form.Group>
            <Button type="submit" style={{"backgroundColor": "#68BBE3", "border": "none"}}>
                Submit
            </Button>

        </Form>
    </div>
    )
}