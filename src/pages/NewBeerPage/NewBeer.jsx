import { Link } from 'react-router-dom'
import imgThree from './../../assets/new-beer.png'
import { Route, Routes } from "react-router-dom";

const NewBeer = () => {
    return (
        <>
            <Link to='/new-beer'>
                <h2>New Beer</h2>
                <img src={imgThree}></img>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Link>
        </>
    )
}

export default NewBeer