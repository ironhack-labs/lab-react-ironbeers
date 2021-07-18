import React from 'react';
import { TextField, Container, Typography, Button } from '@material-ui/core';
import './AddBeer.css';

function AddBeer(props) {
  const { onAddBeer } = props;

  return (
    <Container id="new-beer-container" maxWidth="sm">
      <Typography id="header-create" component="h3" variant="h3">
        Create a New Beer
      </Typography>
      <form onSubmit={onAddBeer}>
        <TextField name="name" id="outlined" label="Name" variant="outlined" />
        <TextField name="tagline" id="outlined" label="Tagline" variant="outlined" />
        <TextField name="description"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
        />
        <TextField name="first_brewed" id="outlined" label="First Brewed" variant="outlined" />
        <TextField name="brewers_tips" id="outlined" label="Brewers Tips" variant="outlined" />
        <TextField name="attenuation_level"
          id="outlined-number"
          label="Attenuation Level"
          type="number"
          variant="outlined"
        />
        <TextField name="contributed_by" id="outlined" label="Contributed By" variant="outlined" />
        <Button id="add-button" variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default AddBeer
