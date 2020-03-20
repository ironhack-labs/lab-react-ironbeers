import React, { useState } from "react";
import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  color: #2f2f2f;
  padding: 10px;
  margin: 10px;
  border: none;
  border-bottom: 1px solid #d7c9aa;
  text-align: center;
  font-family: "Quicksand";
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin: 20px 0;
  width: 40%;
  background-color: #d7c9aa;
  color: #2f2f2f;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #d7c9aa;
  font-size: 1rem;
  font-family: "Quicksand";
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const CreateBeerForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setBrewedAt] = useState("");
  const [brewers_tips, setTips] = useState("");
  const [attenuation_level, setLevel] = useState(0);
  const [contributed_by, setContributor] = useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(
          name,
          tagline,
          description,
          first_brewed,
          brewers_tips,
          attenuation_level,
          contributed_by
        );
      }}
    >
      <Input
        type="text"
        value={name}
        placeholder="name"
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="text"
        value={tagline}
        placeholder="tagline"
        onChange={e => setTagline(e.target.value)}
      />
      <Input
        type="text"
        value={description}
        placeholder="description"
        onChange={e => setDescription(e.target.value)}
      />
      <Input
        type="text"
        value={first_brewed}
        placeholder="brewedAt"
        onChange={e => setBrewedAt(e.target.value)}
      />
      <Input
        type="text"
        value={brewers_tips}
        placeholder="tips"
        onChange={e => setTips(e.target.value)}
      />
      <Input
        type="number"
        value={attenuation_level}
        placeholder={0.0}
        step="0.1"
        onChange={e => setLevel(e.target.value)}
      />
      <Input
        type="text"
        value={contributed_by}
        placeholder="contributor"
        onChange={e => setContributor(e.target.value)}
      />
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
    </Form>
  );
};
