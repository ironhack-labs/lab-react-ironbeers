import {Link} from "react-router-dom"


function HomePage() {
    return (
        <>
            <Link to="/beers">
                <img src="src\assets\beers.png" />
                <h2>All Beers</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut beatae, porro, alias expedita in incidunt nisi ab eaque quisquam perferendis iusto nesciunt quia vel odit fugit dolore? Quam, enim ullam.</p>
            </Link>
            <Link to="/random-beer">
                <img src="src\assets\random-beer.png" />
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut beatae, porro, alias expedita in incidunt nisi ab eaque quisquam perferendis iusto nesciunt quia vel odit fugit dolore? Quam, enim ullam.</p>
            </Link>
            <Link to="/new-beer">
                <img src="src\assets\new-beer.png" />
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut beatae, porro, alias expedita in incidunt nisi ab eaque quisquam perferendis iusto nesciunt quia vel odit fugit dolore? Quam, enim ullam.</p>
            </Link>
        </>
    );
}

export default HomePage;
