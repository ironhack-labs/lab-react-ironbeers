import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage({ beers }) {

    const [search, setSearch] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

    }
    let searchBeer = beers.filter((oneBeer)=>{
        return oneBeer.name.includes(search)
    })
    
    
    return (
        <div className='allBeersDiv'>

            <form className='search'  onChange={handleSubmit}>
                <label >
                    Search:
                    <input type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
                </label>
            </form>

            {searchBeer.map((oneBeer) => {
                return (
                    <div key={oneBeer._id} className='beerDiv'>
                        <img style={{ width: '250px' }} src={oneBeer.image_url}></img>
                        <div className='beerInfoDiv'>
                            <Link to={`/beers/${oneBeer._id}`}><h1>{oneBeer.name}</h1></Link>
                            <h3>{oneBeer.tagline}</h3>
                            <p>{oneBeer.contributed_by}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
