import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div>
            <h1>Bienvenido a IronBeers</h1>
            <p>Explora nuestras cervezas:</p>
            <ul>
                <li>
                    <Link to="/beers">Todas las cervezas</Link>
                </li>
                <li>
                    <Link to="/random-beer">Cerveza aleatoria</Link>
                </li>
                <li>
                    <Link to="/new-beer">Nueva Cerveza</Link>
                </li>
            </ul>
        </div>
    );
}




export default HomePage;
