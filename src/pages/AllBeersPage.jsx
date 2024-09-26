import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beersArray) => {
            setBeers(beersArray.data)
            console.log(beersArray)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    function filterBeers(query){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then((beerFiltered)=>{
            setBeers(beerFiltered.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="container">
            <input className="form-control text-center" onChange={(e)=>{filterBeers(e.target.value)}} placeholder="Search Beers"/>
            {beers.map((oneBeer) => {
                return (
                    <div className="row align-items-center" key={oneBeer._id}>
                        <div className="col-md-2">
                            <img src={oneBeer.image_url} alt="" style={{height:'200px', width: 'auto', marginBottom:'15px', marginTop:'25px'}} />
                        </div> 
                        <div className="col-md-8">
                            <div>
                                <Link to={`/beers/${oneBeer._id}`}><h1 className="text-body">{oneBeer.name}</h1></Link>
                                <p className="lead">{oneBeer.tagline}</p>
                                <p><strong>Created by:</strong> {oneBeer.contributed_by}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
