import React, {useState} from 'react';
import Header from './../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {addBeer} from './../services/beerService';


const NewBeerPage = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState('');
  const [contributed_by, setContributedBy] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addBeer({name, tagline, attenuation_level, first_brewed, description, contributed_by });
    console.log(res);
    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel('');
    setContributedBy('');
  };

  return(
    <div>
      <Header/>
      <br/>
      <Container style={{textAlign: 'left'}}>
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name of beer" value={name} onChange={(e) => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="tagline">
            <Form.Label>Tag-line</Form.Label>
            <Form.Control type="text" placeholder="Tag-line" value={tagline} onChange={(e) => setTagline(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="first_brewed">
            <Form.Label>First brewed</Form.Label>
            <Form.Control type="text" placeholder="First brewed" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="brewers_tips">
            <Form.Label>Brewers tips</Form.Label>
            <Form.Control type="text" placeholder="Brewers tips" value={brewers_tips} onChange={(e) => setBrewersTips(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="attenuation_level">
            <Form.Label>Attenuation level</Form.Label>
            <Form.Control type="number" placeholder="Attenuation level" value={attenuation_level} onChange={(e) => setAttenuationLevel(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="contributed_by">
            <Form.Label>Contributed by</Form.Label>
            <Form.Control type="text" placeholder="Contributed by" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)}/>
          </Form.Group>

          <div style={{textAlign: 'center'}}>
            <Button variant="primary" type="submit" >
              ADD NEW
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default NewBeerPage;