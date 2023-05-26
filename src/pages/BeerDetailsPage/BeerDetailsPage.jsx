import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import BeerDetails from "../../components/BeerDetails/BeerDetails"
import icono from '../../assets/icono.png'


const BeerDetailsPage = () => {
    return (
        <>
            <header className='Header'>
                <Link to="/">
                    <img src={icono} alt="icono" />
                </Link>

            </header>
            <body>
                <BeerDetails />
            </body>
        </>
    )
}

export default BeerDetailsPage;