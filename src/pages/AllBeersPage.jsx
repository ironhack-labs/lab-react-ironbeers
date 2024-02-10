import { useEffect, useState } from 'react';
import { getBeers } from '../services/beerService';
import Navbar from '../components/Navbar';

import BeerCard from '../components/BeerCard';

const AllBeersPage = () => {
    const [beers, setBeers] = useState([])

useEffect (() => {
    getBeers()
    .then((beers) => {
        setBeers(beers)
    })
    .catch((err) => console.erros(err))
}, [])

return (
    <><Navbar /><div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {beers.map((beer) => (
            <div key={beer._id} className="col">
                <BeerCard name={beer.name} img={beer.image_url} _id={beer._id}/>
            </div>
        ))}
    </div></>
  );


}





export default AllBeersPage;
