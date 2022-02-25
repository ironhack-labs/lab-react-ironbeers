import { Link } from 'react-router-dom'
import imgOne from './../../assets/beers.png'
import { Route, Routes } from "react-router-dom";

const AllBeers = () => {
    return (
        <>
            <Link to='/beer'>
                <h2>All Beers</h2>
                <img src={imgOne} ></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Link>
        </>
    )
}

export default AllBeers