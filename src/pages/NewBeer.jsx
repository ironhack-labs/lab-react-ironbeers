import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import styled from 'styled-components'

const NewBeerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;


function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewerTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState('');
  const [contributed_by, setContributedBy] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(() => {
        // Handle success
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header></Header>
      <NewBeerContainer>
        <Form onSubmit={handleSubmit}>
          <FormLabel>Name</FormLabel>
          <FormInput type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <FormLabel>Tagline</FormLabel>
          <FormInput type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />

          <FormLabel>Description</FormLabel>
          <FormInput type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

          <FormLabel>First brewed</FormLabel>
          <FormInput type="text" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)} />

          <FormLabel>Brewers Tips</FormLabel>
          <FormInput type="text" value={brewers_tips} onChange={(e) => setBrewerTips(e.target.value)} />

          <FormLabel>Attenuation Level</FormLabel>
          <FormInput
            type="number"
            value={attenuation_level}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />

          <FormLabel>Contributed By</FormLabel>
          <FormInput type="text" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)} />

          <br />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </NewBeerContainer>
    </>
  );
}

export default NewBeer;