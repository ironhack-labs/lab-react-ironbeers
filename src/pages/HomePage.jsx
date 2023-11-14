import { NavLink } from "react-router-dom";

function HomePage() {
    return (
        <div className="homepage">
            <div className="beers-homepage">
                <img src="src/assets/beers.png" alt="beer taps from a pub" />
                <NavLink to='/beers' className="text-homepage">
                    <h1>All Beers</h1>
                    <h2>Click here to discover a whole world of beers.</h2>
                </NavLink>
            </div>

            <div className="random-beer-homepage">
                <img src="src/assets/random-beer.png" alt="beer taps from a pub" />
                <NavLink to='/random-beer' className="text-homepage">
                    <h1>Random Beer</h1>
                    <h2>Surprise! Today you don't even need to think. Just click and enjoy.</h2>
                </NavLink>
            </div>

            <div className="new-beer-homepage">
                <img src="src/assets/new-beer.png" alt="IPA Voodoo Ranger beer" />
                <NavLink to='/new-beer' className="text-homepage">
                    <h1>New Beer</h1>
                    <h2>CLick here to find out the last releases and be the coolest friend!</h2>
                </NavLink>
            </div>
        </div>
    )
}

export default HomePage;
