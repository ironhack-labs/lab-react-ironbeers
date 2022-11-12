import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import { useState } from 'react';

const defaultState = {
  name: '',
  tagline: '',
  first_brewed: '',
  attenuation_level: 0,
  description: '',
  brewers_tips: '',
  contributed_by: '',
};

function NewBeer() {
  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState((old) => {
      let newValue = event.target.value;
      if (typeof old[event.target.name] === 'number') {
        newValue = parseFloat(event.target.value);
      }

      return { ...old, [event.target.name]: newValue };
    });
  };

  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/new';

  const addBeer = async (state) => {
    console.log(state);
    try {
      const res = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      if (res.ok) {
        setState(defaultState);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBeer(state);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            borderRadius: '25px 10px',
            border: '2px solid #123456',
            boxShadow: '2px 2px 0px #123456',
          }}
        >
          <h3>You want to save a beer?</h3>
          <FormControl>
            <TextField onChange={handleChange} value={state.name} required id="outline-required" name="name" label="Name" />
            <TextField onChange={handleChange} value={state.tagline} required name="tagline" label="Tagline" />
            <TextField
              onChange={handleChange}
              value={state.first_brewed}
              required
              name="first_brewed"
              InputLabelProps={{ shrink: true }}
              type="date"
              label="First Brewed"
            />
            <TextField
              onChange={handleChange}
              value={state.attenuation_level}
              required
              name="attenuation_level"
              type="number"
              label="Attenuation Level"
            />
            <TextField onChange={handleChange} value={state.description} required name="description" multiline label="Description" />
            <TextField onChange={handleChange} value={state.brewers_tips} required name="brewers_tips" multiline label="Brewers Tips" />
            <TextField onChange={handleChange} value={state.contributed_by} required name="contributed_by" label="Contributed By" />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </FormControl>
        </div>
      </Box>
    </div>
  );
}
export default NewBeer;
