import { NavLink } from "react-router-dom";

function HomePage() {
    return (
        <>
            <NavLink to="/beers">All Beers</NavLink>
            <br />
            <NavLink to="/random-beer">Random Beer</NavLink>
            <br />
            <NavLink to="/new-beer">New Beer</NavLink>
        </>
    );
}

export default HomePage;
