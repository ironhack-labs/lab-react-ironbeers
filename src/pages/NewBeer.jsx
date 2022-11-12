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
    // console.log(event.target.value);
    // setState(event.target.value);
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
          justifyContent: 'flex-start',
          padding: '20px',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor: '#eee',
            padding: '20px',
            borderRadius: '25px 10px',
            border: '2px solid #123456',
          }}
        >
          <h3>You want to save a beer?</h3>
          <FormControl sx={{ width: '25ch' }}>
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

// import * as React from 'react';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';
// import FormHelperText from '@mui/material/FormHelperText';

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = React.useMemo(() => {
//     if (focused) {
//       return 'This field is being focused';
//     }

//     return 'Helper text';
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }

// export default function UseFormControl() {
//   return (
//     <Box component="form" noValidate autoComplete="off">
//       <FormControl sx={{ width: '25ch' }}>
//         <OutlinedInput placeholder="Please enter text" />
//         <MyFormHelperText />
//       </FormControl>
//     </Box>
//   );
// }

// id="outlined-required"

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function FormPropsTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>

//         <TextField
//           disabled
//           id="outlined-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//         />
//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         <TextField
//           id="outlined-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//         />
//         <TextField
//           id="outlined-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField id="outlined-search" label="Search field" type="search" />
//         <TextField
//           id="outlined-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//         />
//       </div>
//       <div>
//         <TextField
//           required
//           id="filled-required"
//           label="Required"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           disabled
//           id="filled-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           id="filled-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="filled"
//         />
//         <TextField
//           id="filled-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//         />
//         <TextField
//           id="filled-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="filled"
//         />
//       </div>
//       <div>

//         <TextField
//           disabled
//           id="standard-disabled"
//           label="Disabled"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//         />
//         <TextField
//           id="standard-read-only-input"
//           label="Read Only"
//           defaultValue="Hello World"
//           InputProps={{
//             readOnly: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="standard-number"
//           label="Number"
//           type="number"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="standard"
//         />
//         <TextField
//           id="standard-search"
//           label="Search field"
//           type="search"
//           variant="standard"
//         />
//         <TextField
//           id="standard-helperText"
//           label="Helper text"
//           defaultValue="Default Value"
//           helperText="Some important text"
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }
