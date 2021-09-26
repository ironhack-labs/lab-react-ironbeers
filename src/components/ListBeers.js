import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'




export default function ListBeers(props) {

    const [beers, setBeers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => {
        console.log(res.data)
        setBeers(res.data)
    })
    .catch(err => console.log(err))
    }, [])


    const handleSearchChange = event => {
        event.preventDefault()
        setSearch(event.target.value)
        let newList = beers.filter((beer) => {
        //   return `${beer.firstName}${beer.lastName}`.toLowerCase().includes(search.toLowerCase())
          return beer.name.toLowerCase().includes(search.toLowerCase()) 
        })
        setBeers(newList)
      }

    return (
        <div>
        <form>
        <input type="text" name="search" id="search" value={search} placeholder="Search By Name" onChange={handleSearchChange}/>
        </form>
        {beers.map((beer) => {
            return (
                <div className='beerList'>

                <Link to={`/beers/${beer._id}`}>
                    <div>
                        <img src={beer.image_url} style={{width: "50px"}}></img>
                    </div>
                    </Link>
                    <div class='beerInfo'>
                         <h2>{beer.name}</h2>
                         <p class='tagline'>{beer.tagline}</p>
                         <p><strong>Created by: </strong>{beer.contributed_by}</p>
                     </div>
                     <hr></hr>
                 </div>
                 
            )
        })
        }
        </div>
    )
}
