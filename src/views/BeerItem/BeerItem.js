import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Itemview from '../../components/ItemView/ItemView';
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
        {beer ? <Itemview  item={beer} />
        :
        <p>...loading</p> }       
    </div>
  )
}
