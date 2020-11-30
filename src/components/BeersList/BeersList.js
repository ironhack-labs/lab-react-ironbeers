import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import BeerSearch from '../BeerSearch/BeerSearch'
import './BeersList.css'

const BeersList = () => {
    const [beersList, setBeersList] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beersResults) => {
            console.log(beersResults)
            setBeersList(beersResults.data)
        })
        .catch((err) => {console.error(err)})
    },[])

    const filterFoodsHandler = ((searchInput) => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/search?q={query}")
        .then((searchResults) => {
            searchResults.filter((beer) =>{
                beer.name.inclludes(searchInput)
            })
            setBeersList(searchResults)
        })
        .catch((err) => {console.error(err)})
    },[])

    return(
        <div>
            <Header />
            <BeerSearch handleFilterSearch={filterFoodsHandler}/>
            <div>
            {beersList.map((beerItem) => {
                return(
                        <div key={beerItem._id} className="beerCard">
                            <img src={beerItem.image_url} alt="beers"/>
                            <div className="beerTxt">
                                <Link to={`/beers/${beerItem._id}`}><h2>{beerItem.name}</h2></Link>
                                <p>{beerItem.tagline}</p>
                                <p>{beerItem.contributed_by}</p>
                                <hr />
                            </div>
                        </div>
                    )
            })}
            </div>
        </div>
    );
}

export default BeersList;