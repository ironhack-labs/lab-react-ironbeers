import Navbar from '../components/navbar'

import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ChosenBeerPage from './chosenbeerpage';


const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerPage(){

    const [beers, setBeers] = useState([]);

    useEffect(()=>{
      axios.get(apiURL).then((response)=>{
        setBeers(response.data);
      })
    }) 


    return (
        <div>
            <Navbar/>
            {beers.map((beer) => {
                return (
                    <div>
                        <h3>{beer.name}</h3>
                        <img src={beer.image_url} alt='beer-img'/>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`} element={<ChosenBeerPage/>}>More beer details</Link>
                    </div>
                )
            })}
        </div>
    )
}
export default BeerPage;