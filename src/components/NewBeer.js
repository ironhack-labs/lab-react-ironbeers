import { Routes, Route, NavLink } from 'react-router-dom';


function NewBeer() {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>
            <p>This is new beer page</p>
        </>)
}

export default NewBeer;