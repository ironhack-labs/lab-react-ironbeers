import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import "./BeerDetails.css"
import Home from "../Navbar/Navbar";


const BeerDetails = () => {

    const { beer_id } = useParams()
    const [oneBeer, updateOneBeer] = useState([beer_id])

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beer_id}`)
            .then((response) => {
                updateOneBeer(response.data);

            })
            .catch(err => console.log(err))

    }, [beer_id])


    return (
        
        <>
        <header>
            <Home/>
        </header>
        <body>

            <h1> Beer details </h1>

            <article class="card light">
                <img class="card__img" src={oneBeer.image_url} alt="Cerbeza" />
                <div class="card__text t-dark">
                    <h1 class="card__title"><p>Name:{oneBeer.name}</p></h1>

                </div>
                <div class="card__bar"></div>
                <div class="card__preview-txt">

                    <p> Tagline:{oneBeer.tagline}</p>
                    <p> First brewed:{oneBeer.first_brewed}</p>
                    <p> Fattenuation level: {oneBeer.fattenuation_level}</p>
                    <p> Description: {oneBeer.description}</p>
                    <p> Contributed by{oneBeer.contributed_by}</p>


                </div>
            </article>
        </body>
        </>


    )
}




export default BeerDetails