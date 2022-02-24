import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";


const BeerPageDetails = () => {

    const { beer_id } = useParams()
    const [oneBeer, updateOneBeer] = useState([beer_id])

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beer_id}`)
            .then((response) => {
                updateOneBeer(response.data);
                console.log("holi caracoli", response.data)
            })
            .catch(err => console.log(err))

    }, [beer_id])


    return (

        <>
            <h1> Beer details </h1>

            <div className="Onebeer">
                <img src={oneBeer.image_url}></img>
                <p> Name:{oneBeer.name}</p>
                <p> Tagline:{oneBeer.tagline}</p>
                <p> First brewed:{oneBeer.first_brewed}</p>
                <p> Fattenuation level: {oneBeer.fattenuation_level}</p>
                <p> Description: {oneBeer.description}</p>
                <p> Contributed by{oneBeer.contributed_by}</p>
            </div>

        </>


    )
}




export default BeerPageDetails