import { Link } from 'react-router-dom'
import imgTwo from './../../assets/random-beer.png'
import { Route, Routes } from "react-router-dom";

const RandomBeer = () => {

    return (
        <>
            <Link to='/random-beer'>
                <h2>Random Beer</h2>
                <img src={imgTwo}></img>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Link>
        </>
    )
}

export default RandomBeer