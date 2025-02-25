import React, { useState, useEffect } from "react"
import { Button, Container, Input, InputLabel, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FormControl } from '@mui/material';
import { newBeer } from "../services/BeerService"

export default function Home() {

    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        newBeer(formData).then((res) => {
            setMessage(res.message)
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "attenuation_level") {
            setFormData({ ...formData, [name]: Number(value) })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    return (
        <Container>
            <Grid container spacing={2} pt={4}>
                <Grid item xs={4}>
                    <Paper>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <InputLabel htmlFor="Name">Name</InputLabel>
                                <Input id="Name" name="name" aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="Tagline">Tagline</InputLabel>
                                <Input id="Tagline" name="tagline " aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="Description">Description</InputLabel>
                                <Input id="Description" name="description" aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="First-Brewed">First Brewed</InputLabel>
                                <Input id="First-Brewed" name="first_brewed" aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="First-Brewed">Brewer Tips</InputLabel>
                                <Input id="First-brewers_tips" name="first_brewed" aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="Attenuation-level">Attenuation level</InputLabel>
                                <Input id="Attenuation-level" name="attenuation_level" type="number" aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl>
                            <br /><br />
                            <FormControl>
                                <InputLabel htmlFor="Contributed-by">Contributed by</InputLabel>
                                <Input id="Contributed-by" name="contributed_by" aria-describedby="my-helper-text" onChange={handleChange} />
                            </FormControl><br /><br />
                            <Button type="submit">Send</Button>
                            <br /><br />
                        </form>
                        <p>{message}</p>
                        <br /><br />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}