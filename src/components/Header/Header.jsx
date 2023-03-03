import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {

    return (

        <Container>
            <Row>

                <Link to='/'>
                    <h1>ESTO ES UN HEADER MOBILE FIRST</h1>
                </Link>

            </Row>
        </Container>

    )
}

export default Header