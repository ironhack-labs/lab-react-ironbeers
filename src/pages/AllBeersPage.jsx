import { useEffect, useState } from 'react';
import { getBeers, searchBeer } from '../services/beerService';
import BeerCard from '../components/BeerCard';


function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    const [resApi, setResApi] = useState('');

    useEffect(() => {
        getBeers()
            .then((beersApi) => {
                setBeers(beersApi)
            })
            .catch((err) => console.error(err))
    }, []); 

    useEffect(() => {
        searchBeer(resApi)
            .then((searchedBeer) => {
                setBeers(searchedBeer)
            })
            .catch((err) => console.error(err))
    }, [resApi]);

    const handleOnSearch = (ev) => {
        console.log(ev.target.value)
        setResApi(ev.target.value);

    };

    return(
        <div>
            <div>
            <h2>All Beers</h2>
            <label htmlFor="search">Search your Beer:</label>
            <input type="text"
                id="search"
                value={resApi.name}
                onChange={handleOnSearch} />
            </div> 
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {beers.map((beer) => (
                    <div key={beer._id} className="col">
                        <BeerCard {...beer}/>
                    </div>
                ))}
        </div>
        </div>
    )
}

export default AllBeersPage;
