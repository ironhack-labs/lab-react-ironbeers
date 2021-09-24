import React, {useEffect, useState} from 'react'
import axios from 'axios'

const BeersPage = () => {

    const [allBeers, setAllBeers] = useState([])


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(data => setAllBeers(data.data))
        .catch(err => console.log(err))
    },[])

   
 


}

export default BeersPage
