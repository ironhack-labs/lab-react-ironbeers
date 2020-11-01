import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

const NewBeer = ({onAdd}) => {
  return (
    <Container
      text
      style={{
        marginTop: '3em',
        width: '500px'
      }}
      textAlign="left"
    >
      <Form onSubmit={onAdd}>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" name='name' type='text' required/>
        </Form.Field>
        <Form.Field>
          <label>Tagline</label>
          <input placeholder="Tagline" name="tagline" type='text' required/>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder="Description" name="description" type='text' required/>
        </Form.Field>
        <Form.Field>
          <label>First brewed</label>
          <input placeholder="First brewed" name="first_brewed" type='text' required/>
        </Form.Field>
        <Form.Field>
          <label>Brewers tips</label>
          <input placeholder="Brewers tips" name="brewers_tips" type='text' required/>
        </Form.Field>
        <Form.Field>
          <label>Attenuation level</label>
          <input placeholder="Attenuation level " name="attenuation_level" type='number' required/>
        </Form.Field>
        <Form.Field>
          <label>Contributed by</label>
          <input placeholder="Contributed by" name="contributed_by" type='text' required/>
        </Form.Field>


        <Button type="submit">Add New</Button>
      </Form>
    </Container>
  );
};

export default NewBeer;
