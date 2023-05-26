import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import icono from '../../assets/icono.png'
import BeerList from "../../components/BeersList/BeersList"


const BeersPage = () => {
    return (
        <><header className='Header'>
            <Link to="/">
                <img src={icono} alt="icono" />
            </Link>

        </header>
            <body>
                <BeerList />
            </body></>

    )
}

export default BeersPage;