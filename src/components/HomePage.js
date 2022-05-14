import { NavLink } from "react-router-dom"
import "./HomePage.css"

function HomePage() {
    return (
<div className="HomePage">
    <NavLink to={"/beers"}> Beers </NavLink>
    <NavLink to={"/random-beer"}> Random Beer</NavLink>
    <NavLink to={"/new-beer"}> New Beer</NavLink>
</div>
    )
}

export default HomePage