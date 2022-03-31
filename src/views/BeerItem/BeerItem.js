import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { beerSingle } from '../../services/BeersService';

export default function BeerItem() {
    const { id } = useParams()
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        beerSingle(id)
        .then(response => {setBeer(response)})
    }, []);

    console.log(beer)

  return (
    <div>
        <p>hola</p>
        <p>id : {id}</p>
        {beer && <p>{beer.name}</p>}
       
    </div>
  )
}
