import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

function ListBeers(props) {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {

                // 要用console去看資料結構，這跟網站點進去的有點不一樣
                console.log(response.data)
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(beers)
    return (
        <div>
            <Header />

            {beers.map(function (beer) {
                return (
                    <div key={beer._id} className="beer-list">
                        <img height='300px' src={beer.image_url} alt="beerImg" className="beer-img" />
                        
                        <Link to={`/onebeer/${beer._id}`}>
                            {beer.name}
                        </Link>
                        <span>Tagline: {beer.tagline}</span>
                        <span>Contributed by: {beer.contributed_by}</span>
                        <span>First Brewed: {beer.first_brewed}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ListBeers;



