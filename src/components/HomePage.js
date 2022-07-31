import { Routes, Route, NavLink } from 'react-router-dom';


function HomePage() {
    return (
        <>
            <p>This is the HomePage page</p>
            <nav>
                <NavLink to="/beers">All Beers</NavLink>
                <NavLink to="/random-beer">A Random Beer</NavLink>
                <NavLink to="/new-beer">add a new Beer</NavLink>
            </nav>
        </>)
}

export default HomePage;