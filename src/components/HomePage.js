import { NavLink } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <div>
                <img src="./assets/beers.png" alt=""/>
                <NavLink to='/beers'>All Beers</NavLink>
            </div>
            <div>
                <img src="assets/new-beer.png" alt=""/>
                <NavLink to='#'>New Beer</NavLink>
            </div>
            <div>
                <img src="src/assets/random-beer.png" alt=""/>
                <NavLink to='#'>Random Beer</NavLink>
            </div>
        </div>
    )
}

export default HomePage