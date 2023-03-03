import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import '../App.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Header from '../components/Header';



//chamada à API
  const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

 
function Beers() {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)

  const getBeersFromAPI = async () => {
    try {
      
      const response = await axios.get(apiURL);
      setBeers(response.data)
      setLoading(false);

      console.log(response.data)
      

    } catch (error) {
      console.log(error)
      
    }
  };

//iniciar a função declarada acima, que nos faz a chamada À API
  useEffect(() => {
    getBeersFromAPI()
  }, []);

  return (
    <div>
        <Header />

      {beers.map((cerveja) => {
        return (
        <div>
        
          <Link to={`/beers/${cerveja._id}`}>
            <img src={cerveja.image_url} alt={cerveja.name} />

            <h4>Name: {cerveja.name}</h4>
          </Link>
        </div>
        )
      })}

    </div>
  )
}

export default Beers