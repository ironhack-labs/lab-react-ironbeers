import React, {useEffect, useState} from 'react';
import './BeerDetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Beer from '../../components/Navbar/Beer/Beer';

const BeerDetail = ({apiUrl}) => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(()=>{
        const fetchBeerDetail = async () =>{
            try {
                const oneBeerApi =apiUrl.concat(`/${id}`);
                const response = await axios.get(oneBeerApi)
                setBeer(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchBeerDetail()
    }, [id]);

  return (
    <div>
    
    {beer ? <Beer {...beer} /> : <p>Loading...</p> }
    
    </div>



  )
}

export default BeerDetail