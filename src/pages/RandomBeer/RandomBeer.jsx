import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Beer from '../../components/Navbar/Beer/Beer';
import './RandomBeer.css'
const RandomBeer = ({ apiUrl }) => {
    const [randomBeer, setRandomBeer] = useState(null);
    const randomUrl = apiUrl.concat('/random');

    useEffect(() =>{
        const fetchRandomBeer = async () =>{
            try {
                const response = await axios.get(randomUrl);
                setRandomBeer(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchRandomBeer()
    }, []);
  return (
    <div style={{width: '60vw' }}>
    {randomBeer ? <Beer hideLink {...randomBeer}></Beer> : <p>Loading...</p>}

    </div>
  )
}

export default RandomBeer