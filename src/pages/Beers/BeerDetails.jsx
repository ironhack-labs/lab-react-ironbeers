import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import MediaCard from '../../components/MediaCard/MediaCard'
import  Box  from '@mui/material/Box';

const BeerDetails = () => {

  const [chela, setChela] = useState(null);
  const { beerId } = useParams()

  

  const getChela = () => {        
    // <== ADD A NEW FUNCTION
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        const oneChela = response.data;
        setChela(oneChela);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getChela();
  }, []);

  return (
    <div>
      <Navbar />
      <Box 
        component="div" 
        sx={{
          my: 1,
          mx: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
          {chela && (
            <>
              <MediaCard {...chela} />
            </>
          )}    
        </Box>
    </div>
  )
}

export default BeerDetails