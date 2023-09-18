import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'

function AllBeersPage() {

   const [beers, setBeers] = useState([]);
    console.log(beers)
   useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            setBeers(response.data)
        })
        .catch((e) => {
            console.log("Error getting list of Beers", e)
        })
   },[]);

   const renderList = () => {
    if (beers === null){
        return <p>Loading...</p>
    }

    return beers.map((beerObj, index) => {
        return (
            <>
            <section key={beerObj._id} className="container">
                <img src={beerObj.image_url} alt="" className="item"/>
                <h2 className="item">{beerObj.name}</h2>
                <h3 className="item">{beerObj.tagline}</h3>
                <h4 className="item">Created by:{beerObj.contributed_by}</h4>
                <button>
                    <Link to={`/beers/${beerObj._id}`} className="item">Beer Details</Link>
                </button>
            </section>
            </>
        )
    })
   }



    return(
        <>
        <h1>List of Beers</h1>
        <div>
            {renderList()}
        </div>
        </>

    )
}

export default AllBeersPage;