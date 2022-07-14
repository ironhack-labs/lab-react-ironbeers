import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <Link to="/beers">
                <h2>Lista de cervezas</h2>
            </Link>

            <Link to="/random">
                <h2>Cerveza random</h2>
            </Link>

            <Link to="/new">
                <h2>Crear cerveza</h2>
            </Link>
        </>

    )

}

export default HomePage
