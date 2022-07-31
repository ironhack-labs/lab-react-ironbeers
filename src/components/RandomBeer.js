import { Routes, Route, NavLink } from 'react-router-dom';


function RandomBeers() {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            <p>This is a random Beer</p>
        </>)
}

export default RandomBeers;