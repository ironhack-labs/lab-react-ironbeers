import {NavLink} from "react-router-dom"

export function Home(props){
    return (
        <div>
            <h1>Ironbeers</h1>
            <NavLink to="/beers" className="link">Beers</NavLink>
            <NavLink to="/random-beer" className="link">Random Beer</NavLink>
            <NavLink to="/new-beer" className="link">New Beer</NavLink>
        </div>
    )
}