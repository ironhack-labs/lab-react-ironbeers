import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beerList, setBeerList] = useState(null)

    
    const getBeerList = () => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then( response => {
                console.log(response.data)
                setBeerList(response.data)
            })
            .catch( error => {
                console.log('not getting beer list')
                console.log(error)
            })
    } 

    useEffect(() => {
        getBeerList()
    }, [])

    return (
        <main>
            <h1>All Beers</h1>
            <div className="list-wrap">
                {!beerList
                    ? <p>loading...</p>
                    : beerList.map((beer) => {
                    return ( 
                        <Link to={`/beers/${beer._id}`} key={beer._id} className="card">
                            <img src={beer.image_url} alt={beer.name} />
                            <h2>{beer.name}</h2> 
                            <h3>{beer.tagline}</h3> 
                            <p>{beer.contributed_by}</p> 
                        </Link>
                    )
                })} 
            </div>
            


        </main>
    )
}

export default AllBeersPage;
