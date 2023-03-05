import React, {useState, useEffect} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom'
import Navbar from '../components/NavBar';
import axios from 'axios';


function BeersInfo() {

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

    useEffect(() => {
      getBeerFromAPI()
    }, []);

  return (
    <div>
    <Navbar/>

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

export default BeersInfo