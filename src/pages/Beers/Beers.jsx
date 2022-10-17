import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Element from '../../components/Element/Element'

const Beers = () => {
    
    const [chelas, setChelas] = useState([])

    const getAllChelas = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
                .then((response) => setChelas(response.data))
                .catch((error) => console.log(error))
    }

    // We set this effect will run only once, after the init. render
    // by setting the empty dependency array - []

    useEffect(() => {
        getAllChelas();
        
    }, [])


  return (
    <div>
        <Navbar />
        
        {
            chelas?.map((chela, index) => {
                return(
                    <div key={chela._id}>
                        <Element {...chela} />
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Beers