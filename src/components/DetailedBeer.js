import React from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Nav from './Nav';

const api = axios.create({baseURL: "https://ih-beers-api2.herokuapp.com/beers/"})

function DetailedBeer() {
    async function getBeer() {
        const {data} = await api.get(id)
        setBeer(data)
    }
    const {id} = useParams()
    const [beer, setBeer] = React.useState({})

    React.useEffect(() => {
        getBeer()
      
    }, [])

  return <div>
          <Nav />

      Details of Beer
      <h2>{beer.name}</h2>
      <img width="150px" src={beer.image_url} alt={beer.name}/>
  </div>;
}

export default DetailedBeer;
