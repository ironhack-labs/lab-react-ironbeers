import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios'
import NavBar from '../components/NavBar';
import {useParams} from 'react-router-dom'


function RandomBeer() {

  const {id} = useParams();

    const [beer, setBeer] = useState([])
    const [loading, setLoading] = useState(true)

    const getBeerFromAPI = async () => {
      try {

        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
        setBeer(response.data)
        setLoading(false);

        console.log(response.data)


      } catch (error) {
        console.log(error)

      }
    };

    useEffect(() => {
      getBeerFromAPI()
    }, []);

  return (
    <div>

      <NavBar/>
      <section>
            {beer && ( 
                <>
                <img src={beer.image_url}/>
                <h4>{beer.name}</h4>
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

export default RandomBeer 