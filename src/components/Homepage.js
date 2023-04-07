import { NavLink } from "react-router-dom"


function Homepage(){

    return(
        <>
        <nav>
            <NavLink to={"/beers"}>List of Beers</NavLink>
            <NavLink to={"/random-beer"}>Random Beer</NavLink>
            <NavLink to={"/new-beer"}>New Beer</NavLink>
        </nav>
        <h1>Welcome by Ironbeers</h1>
        </>

    )

}

export default Homepage