import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  color: #000;
  padding: 10px;
  border-bottom: 1px solid #000;
`;

const Button = styled.button`
  background-color: #3e3e3f;
  color: #fff;
  border-radius: 5px;
  border: 1px solid orange;
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
    <form
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
      <Container>
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
          type="text"
          value={attenuation_level}
          placeholder="level"
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
      </Container>
    </form>
  );
};
