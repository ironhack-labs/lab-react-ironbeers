import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Icon, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const NewBeer = () => {

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate()


  const handleSubmit = event => {
    event.preventDefault()

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    })
      .then(response => {
        console.log(response)
        navigate('/beers')
      })

  }

  return (
    <div>
      <form>
        <Grid container >
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"center"}
              lg={12}
              xs={12}
              spacing={1}
              style={{ padding: 10 }}>
              <Grid item xs={12}>
                <TextField
                  label={'Name'}
                  fullWidth
                  size="small"
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  name="name"
                  value={name} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'Tagline'}
                  size="small"
                  onChange={(event) => setTagline(event.target.value)}
                  type=" text"
                  name="tagline"
                  value={tagline} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'Description'}
                  size="small"
                  onChange={(event) => setDescription(event.target.value)}
                  type=" text"
                  name="description"
                  value={description} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'First Brewed'}
                  size="small"
                  onChange={(event) => setfirstBrewed(event.target.value)}
                  type=" text"
                  name="firstBrewed"
                  value={firstBrewed} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'Brewers Tips'}
                  size="small"
                  onChange={(event) => setBrewersTips(event.target.value)}
                  type=" text"
                  name="brewers-tips"
                  value={brewersTips} />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'Attenuation Level'}
                  size="small"
                  onChange={(event) => setAttenuationLevel(event.target.value)}
                  type="number"
                  name="attenuationLevel"
                  value={attenuationLevel} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'Contributed By'}
                  size="small"
                  onChange={(event) => setContributedBy(event.target.value)}
                  type="text"
                  name="contributedBy"
                  value={contributedBy} />
              </Grid>
              <Grid item={3}>
                <Button
                  variant={"contained"}
                  startIcon={<AddIcon />}
                  type="submit">
                  Add new
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>

    </div >
  );
};

export default NewBeer;