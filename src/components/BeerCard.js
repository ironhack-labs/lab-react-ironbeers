import { useEffect, useState } from 'react';
import axios from 'axios';
import './BeerCard.css'

function BeerCard () {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data)
            })
    }, []); 

    let beerDatas = beers.map((beer) => {
        return (
            <div key={beer._id} className='beer-card'>
                <div className='beer-img'><img src={beer.image_url} alt="beer-img" width='5%'/></div>
                <div className='beer-datas'>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <b><p>Created by: {beer.contributed_by}</p></b>
                <hr></hr>
                </div>
            </div>
        )
    })

    return (
        <div className='beer-card'>
            {beerDatas}
        </div>
    )
}
export default BeerCard;