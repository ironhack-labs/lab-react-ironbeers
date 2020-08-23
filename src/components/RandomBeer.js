import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import axios from 'axios';
import {API_URL} from '../config';
import BeerDetailsCard from './BeerDetailsCard'
import {Spinner} from 'react-bootstrap'

export default function RandomBeer() {

    const [beer, setBeer] = useState([]);
 
    useEffect(() => {
        axios.get(`${API_URL}/random`)
        .then((res) => {
            setBeer(res.data)
        })
    }, [])

    return (
        <div>
            <Nav />
            {  
                !beer.image_url ? <Spinner animation="border" variant="primary" role="status"></Spinner> : <BeerDetailsCard beer={beer}/>
            }
            
        </div>
    )
}