import React from 'react';
import { Link } from 'react-router-dom';
import './Beers.css';
import Header from './Header';


const Beers = () => {

    const [beerList, setBeerList] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')

    React.useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://api.punkapi.com/v2/beers?name=${searchValue}`)
            const beersUrl = await data.json();
            setBeerList(beersUrl);
        }
        getData()
    }, [searchValue])


    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div>
            <Header />
            <div className="bodyBeers">
                <input type="text" name="search" onChange={handleSearch} value={searchValue}/>
                {beerList.map(beer => {
                    return (
                        <div key={beer.id}>
                            <Link style={{ textDecoration: 'none' }} to={`/beers/${beer.id}`}>
                                <img src={beer.image_url} style={{ maxWidth: "60px" }} alt={beer.name} />
                            </Link>
                            <div>
                                <Link to={`/beers/${beer.id}`}>
                                    <h2>{beer.name}</h2>
                                </Link>
                                <h3>{beer.tagline}</h3>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Beers;