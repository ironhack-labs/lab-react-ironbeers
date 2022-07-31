import { Routes, Route, NavLink } from 'react-router-dom';


function Beers() {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            <p>This is Beers List</p>
        </>)
}

export default Beers;