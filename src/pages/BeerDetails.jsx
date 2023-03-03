import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import '../App.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'


function BeerDetails() {

    const {id} = useParams();

    const [beer, setBeer] = useState([])
    const [loading, setLoading] = useState(true)
  
    const getBeerFromAPI = async () => {
      try {
        
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeer(response.data)
        setLoading(false);
  
        console.log(response.data)
        
  
      } catch (error) {
        console.log(error)
        
      }
    };
  
  //iniciar a função declarada acima, que nos faz a chamada À API
    useEffect(() => {
      getBeerFromAPI()
    }, []);

  return (
    <div>

    <Header />
    
        <section>
            {beer && ( 
                <>
                <img src={beer.image_url}/>
                <h5>{beer.name}</h5>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
                </>
                
 
            ) }
            

        </section>
    </div>
  )
}

export default BeerDetails