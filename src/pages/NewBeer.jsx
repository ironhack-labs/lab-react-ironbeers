import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, FormControl, FormLabel, Input, Box, Textarea, Center } from "@chakra-ui/react";
export default function NewBeer () {

    const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

    const [newBeer, setNewBeer] = useState ({
        name:'',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
    })

    const navigate = useNavigate();


    const cleanInputs = () => {
    setNewBeer ({
            name:'',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
     })   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post(`${API_URL}/new`, newBeer) 
          cleanInputs();
          navigate("/beers");
        } catch (error) {
          console.log(error)  
        }

    }

    const handleChange = (e) => {
        setNewBeer({
          ...newBeer,
          [e.target.name]: e.target.value
        });
      }


    return (
        <Box
        maxW="60%"
        m={30}>
            <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' name={"name"} value={newBeer.name} onChange={handleChange} />
          </FormControl>
          <FormControl mt="12px">
            <FormLabel>Tagline</FormLabel>
            <Input type='text' name={"tagline"} value={newBeer.tagline} onChange={handleChange} />
          </FormControl>
          <FormControl mt="12px">
            <FormLabel>Description</FormLabel>
            <Textarea multiple type='text' name={"description"} value={newBeer.description} onChange={handleChange} />
          </FormControl>
          <FormControl mt="12px">
            <FormLabel>First Brewed</FormLabel>
            <Input type='text' name={"first_brewed"} value={newBeer.first_brewed} onChange={handleChange} />
          </FormControl>
          <FormControl mt="12px">
            <FormLabel>Brewers Tips</FormLabel>
            <Input type='text' name={"brewers_tips"} value={newBeer.brewers_tips} onChange={handleChange} />
          </FormControl>
          <FormControl mt="12px">
            <FormLabel>Attenuation Level</FormLabel>
            <Input type='number' name={"attenuation_level"} value={newBeer.attenuation_level} onChange={handleChange} />
          </FormControl>   
          <FormControl mt="12px">
            <FormLabel>Contributed by</FormLabel>
            <Input type='text' name={"contributed_by"} value={newBeer.contributed_by} onChange={handleChange} />
          </FormControl>
       
          <Button variant='solid' colorScheme='blue'>Crear</Button>
          </form>
          </Box>
    )
}